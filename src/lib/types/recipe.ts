import { recipeSchema } from '@/app/(root)/recipes/create/page';
import * as z from 'zod';

export type TRecipe = z.infer<typeof recipeSchema>;
