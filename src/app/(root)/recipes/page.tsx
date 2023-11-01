import { getAuthSession } from '@/app/api/auth/[...nextauth]/route';
import RecipeCard from '@/components/ui/recipe-card';
import { prisma } from '@/lib/db';
import Link from 'next/link';
import { redirect } from 'next/navigation';

async function getRecipes() {
  const data = await prisma.recipe.findMany();
  return data;
}

export default async function Page() {
  const recipes = await getRecipes();
  const session = await getAuthSession();

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/recipes');
  }

  return (
    <main
      className="
    container grid 
    min-h-screen grid-cols-1 
    gap-x-4
    gap-y-4 py-8 
    sm:grid-cols-3 
    md:grid-cols-2 
    lg:grid-cols-4
    "
    >
      {recipes.map((recipe, idx) => (
        <>
          <Link href={`/recipes/${recipe.id}`}>
            <RecipeCard
              key={recipe.id}
              description={recipe.description}
              image={recipe.image}
              title={recipe.name}
            />
          </Link>
        </>
      ))}
      <RecipeCard
        description="lorem ipsum"
        image="https://files.edgestore.dev/qxmsdgmhykx7ohva/publicImages/_public/32e7bea5-29cb-4d11-aab7-d6320300856c.png"
        title="Salad"
      />
      <RecipeCard
        description="lorem ipsum"
        image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2960&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Salad"
      />
      <RecipeCard
        description="lorem ipsum"
        image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2960&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Salad"
      />
      <RecipeCard
        description="lorem ipsum"
        image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2960&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Salad"
      />
      <RecipeCard
        description="lorem ipsum"
        image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2960&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Salad"
      />
    </main>
  );
}
