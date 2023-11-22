import { prisma } from '@/lib/db';
import type { Recipe } from '@prisma/client';
import { getErrorMessage } from '@/utils/get-error';
import { default as DOMPurify } from 'dompurify';
import { JSDOM } from 'jsdom';
import { isRecipeExists } from '@/utils';
import { TracingBeam } from '@/components/recipe-detail-screen/tracing-beam'
import Comment from '@/components/recipe-detail-screen/comments';
import Rating from '@/components/recipe-detail-screen/rating';

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

const RecipeDetailPage = async ({ params }: { params: { slug: string } }) => {
  // recipe is type string | object | null
  const { data, errorMessage: error } = await getRecipe(params.slug);

  // validation
  if (isRecipeExists(data)) {
    // typescript still assumes that data might be null | undefined after validation, so we have to cast it
    let recipe = data as Recipe;
    const sanitizedInstructions = DOMPurify((new JSDOM("<!DOCTYPE html>")).window).sanitize(recipe.instructions)
    const sanitizedIngredients = DOMPurify((new JSDOM("<!DOCTYPE html>")).window).sanitize(recipe.ingredients)
    recipe = {
      ...recipe,
      instructions: sanitizedInstructions,
      ingredients: sanitizedIngredients,
    }
    return (
      <main className="container grid min-h-screen grid-cols-1 justify-items-center">
        <TracingBeam recipe={recipe} />
        <Comment />
        <Rating totalStars={4} />
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

export default RecipeDetailPage;
