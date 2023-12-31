import React from 'react';
import { JSDOM } from 'jsdom';
import { TracingBeam } from './tracing-beam';
import type { Recipe } from '@prisma/client';
import Rating from '@/components/recipe-detail-screen/rating';
import Comment from '@/components/recipe-detail-screen/comments';
import { prisma } from '@/lib/db';
import { getErrorMessage, isRecipeExists } from '@/utils';
import DOMPurify from 'dompurify';

type RecipeProps = {
  slug: string;
};

async function getRecipe(slug: Recipe['id']) {
  try {
    const recipe = await prisma.recipe.findFirst({
      where: {
        id: slug,
      },
    });
    return { data: recipe, error: null };
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    return { data: null, error: errorMessage };
  }
}

const Recipe = async ({ slug }: RecipeProps) => {
  const { data, error } = await getRecipe(slug);
  if (isRecipeExists(data) && !error) {
    // recipe exists, cast data to Recipe
    let recipe = data as Recipe;
    // sanitize HTML
    const sanitizedInstructions = DOMPurify(
      new JSDOM('<!DOCTYPE html>').window,
    ).sanitize(recipe.instructions);
    const sanitizedIngredients = DOMPurify(
      new JSDOM('<!DOCTYPE html>').window,
    ).sanitize(recipe.ingredients);
    recipe = {
      ...recipe,
      instructions: sanitizedInstructions,
      ingredients: sanitizedIngredients,
    };
    return (
      <>
        <TracingBeam recipe={recipe} />
        <Comment />
        <Rating totalStars={4} />
      </>
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

export default Recipe;
