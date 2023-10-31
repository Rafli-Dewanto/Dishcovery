import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { prisma } from '@/lib/db';
import * as z from 'zod';

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
  const headersLists = headers();
  const token = headersLists.get('Authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.json(
      {
        message: 'FORBIDDEN',
      },
      {
        status: 403,
      },
    );
  }

  if (request.body === null) {
    return NextResponse.json(
      {
        message: 'data must not be null',
      },
      {
        status: 400,
      },
    );
  }
  const body: TPayload = await request.json();
  const author = await prisma.user.findFirst({
    where: {
      email: body.author,
    },
  });

  const newRecipe = await prisma.recipe.create({
    data: {
      name: body.name,
      calories: Number(body.calories),
      description: body.description,
      instructions: body.instructions,
      image: body.image,
      cuisineType: body.cuisine_type,
      userId: author?.id as string,
    },
    select: {
      name: true,
      userId: true,
    },
  });

  return NextResponse.json(
    {
      message: 'recipe created',
      data: newRecipe,
    },
    {
      status: 201,
    },
  );
}
