import { prisma } from '@/lib/db';
import type { Recipe } from '@prisma/client';
import { getErrorMessage } from '@/utils/get-error';
import Image from 'next/image';
import { default as DOMPurify } from 'dompurify';
import { JSDOM } from 'jsdom';
import { isRecipeExists } from '@/utils';

const RecipeDetailPage = async ({ params }: { params: { slug: string } }) => {
  // recipe is type string | object | null
  const { data, errorMessage: error } = await getRecipe(params.slug);

  // validation
  if (isRecipeExists(data)) {
    const recipe = data as Recipe; // typescript still assume that data might be null | undefined, so we have to cast it
    return (
      <main className="container grid min-h-screen grid-cols-1 justify-items-center">
        <h1>{recipe.name}</h1>
        <Image
          className="h-auto w-auto"
          width={300}
          height={300}
          src={recipe.image}
          alt={recipe.name}
        />
        <p>Cuisine: {recipe.cuisineType}</p>
        <pre>Calories: {recipe.calories}</pre>
        <p>{recipe.description}</p>
        <article
          dangerouslySetInnerHTML={{
            __html: DOMPurify(new JSDOM('<!DOCTYPE html>').window).sanitize(
              recipe.instructions,
            ),
          }}
          className="bg-red-400"
        ></article>
      </main>
    );
  } else {
    return (
      <main className="container grid min-h-screen grid-cols-1 justify-items-center">
        <h1>Oops Something went wrong!</h1>
        <p>{error}</p>
      </main>
    );
  }
};

async function getRecipe(slug: Recipe['id']) {
  let data;
  let errorMessage;
  try {
    data = await prisma.recipe.findFirst({
      where: {
        id: slug,
      },
    });
  } catch (error) {
    errorMessage = getErrorMessage(error);
    console.error(errorMessage);
  }
  return { data, errorMessage };
}

export default RecipeDetailPage;
