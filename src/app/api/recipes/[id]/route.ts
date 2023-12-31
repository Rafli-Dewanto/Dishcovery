import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { prisma } from '@/lib/db';
import { getErrorMessage } from '@/utils/get-error';

interface Params {
  params: {
    id: string;
  };
}

export async function GET(_req: Request, { params }: Params) {
  const token = headers().get("Authorization")?.split(" ")[1];
  console.log(token);
  /*if (!token || token === undefined || token === null) {
    return NextResponse.json({
      message: "Forbidden: no token provided, please sign in"
    }, {
      status: 403
    })
  }*/

  const id = params.id;
  try {
    const data = await prisma.recipe.findFirst({
      where: {
        id,
      },
    });
    if (data == null) {
      return NextResponse.json(
        {
          message: 'not found',
        },
        {
          status: 404,
        },
      );
    }
    return NextResponse.json(
      {
        data,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    const message = getErrorMessage(error);
    console.error(message);

    return NextResponse.json(
      {
        message,
      },
      {
        status: 500,
      },
    );
  }
}
