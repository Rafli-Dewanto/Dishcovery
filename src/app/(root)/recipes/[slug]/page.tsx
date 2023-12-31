import Recipe from '@/components/recipe-detail-screen/recipe';
import { Suspense } from 'react';

const RecipeDetailPage = async ({ params }: { params: { slug: string } }) => {
  return (
    <main className="container grid min-h-screen grid-cols-1 justify-items-center">
      <Suspense fallback={<>loading...</>}>
        <Recipe slug={params.slug} />
      </Suspense>
    </main>
  );
};

export default RecipeDetailPage;
