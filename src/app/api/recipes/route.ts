import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { prisma } from '@/lib/db';
import { getErrorMessage } from '@/utils/get-error';
import { RecipePayload } from '@/lib/types/recipe';
import * as DOMPurify from 'dompurify';

export async function POST(request: Request) {
  try {
    const headersLists = headers();
    const token = headersLists.get('Authorization')?.split(' ')[1];

    if (!token) {
      return NextResponse.json(
        {
          message: 'Forbidden: Authorization token not provided',
        },
        {
          status: 403,
        },
      );
    }

    if (!request.body) {
      return NextResponse.json(
        {
          message: 'Bad Request: Request body must not be empty',
        },
        {
          status: 400,
        },
      );
    }

    const body: RecipePayload = await request.json();

    // Sanitizing inputs
    const sanitizedCalories = Number(body.calories);

    // Authenticating user
    const author = await prisma.user.findFirst({
      where: {
        email: body.author,
      },
    });

    if (!author) {
      return NextResponse.json(
        {
          message: 'Unauthorized: Author not found',
        },
        {
          status: 401,
        },
      );
    }

    // Creating new recipe
    console.log(body.ingredients);
    const newRecipe = await prisma.recipe.create({
      data: {
        name: body.name,
        calories: sanitizedCalories,
        description: body.description,
        instructions: DOMPurify.sanitize(body.instructions, { USE_PROFILES: { html: true } }),
        ingredients: DOMPurify.sanitize(body.ingredients, { USE_PROFILES: { html: true } }),
        image: body.image,
        cuisineType: body.cuisine_type,
        userId: author.id,
      },
      select: {
        name: true,
        userId: true,
      },
    });

    return NextResponse.json(
      {
        message: 'Recipe created',
        data: newRecipe,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    return NextResponse.json(
      {
        message: `Internal Server Error: ${errorMessage}`,
      },
      {
        status: 500,
      },
    );
  }
}
