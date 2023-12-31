import { Recipe } from '@prisma/client';

export function isRecipeExists(recipe: Recipe | null | undefined) {
  return typeof recipe === 'object' && recipe != null;
}
