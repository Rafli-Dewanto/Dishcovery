// FIXME hydration error

import { prisma } from '@/lib/db';
import { getErrorMessage } from '@/utils/get-error';
import Image from 'next/image';
import { default as DOMPurify } from 'dompurify';
import { JSDOM } from 'jsdom';

const RecipeDetailPage = async ({ params }: { params: { slug: string } }) => {
  // recipe is type string | object recipe | null
  const { data: recipe, errorMessage: error } = await getRecipe(params.slug);

  // validation
  if (typeof recipe === 'object' && recipe !== null && recipe !== undefined) {
    return (
      <main className="container grid min-h-screen grid-cols-1 justify-items-center">
        <h1>{recipe?.name}</h1>
        <Image
          className=""
          width={300}
          height={300}
          src={recipe?.image}
          alt={recipe?.name}
        />
        <p>Cuisine: {recipe?.cuisineType}</p>
        <pre>Calories: {recipe?.calories}</pre>
        <p>{recipe?.description}</p>
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

async function getRecipe(slug: string) {
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
