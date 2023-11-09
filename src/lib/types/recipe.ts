import * as z from 'zod';

export const recipePayloadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'recipe name is not long enough' })
    .max(50, { message: "That's too long" }),
  image: z.string(),
  calories: z.string(),
  description: z.string().min(5).max(100).trim(),
  instructions: z
    .string()
    .min(10, { message: 'Instructions must contain at least 10 character(s)' }),
  cuisine_type: z.string().min(3),
  author: z.string().min(5).email(),
});

export const recipeSchema = z.object({
  name: z.string().min(2).max(50),
  image: z.instanceof(File),
  calories: z.string(),
  description: z.string().min(5).max(100),
  instructions: z.string().min(10),
  cuisine_type: z.string().min(3),
});

export type Recipe = z.infer<typeof recipeSchema>;
export type RecipePayload = z.infer<typeof recipePayloadSchema>;
