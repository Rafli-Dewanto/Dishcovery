import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { prisma } from '@/lib/db';
import * as z from 'zod';
import { getErrorMessage } from '@/utils/get-error';

const payloadSchema = z.object({
  name: z.string().min(2).max(50),
  image: z.string(),
  calories: z.string(),
  description: z.string().min(5).max(100),
  instructions: z.string().min(10),
  cuisine_type: z.string().min(3),
  author: z.string().min(5).email(),
});

type TPayload = z.infer<typeof payloadSchema>;

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

    const body: TPayload = await request.json();

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
    const newRecipe = await prisma.recipe.create({
      data: {
        name: body.name,
        calories: sanitizedCalories,
        description: body.description,
        instructions: body.instructions,
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
