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
    // typescript still assumes that data might be null | undefined after validation, so we have to cast it
    const recipe = data as Recipe;
    return (
      <main className="container grid min-h-screen grid-cols-1 justify-items-center">
        <section className="body-font overflow-hidden text-gray-600">
          <div className="container mx-auto px-5 py-24">
            <div className="mx-auto flex flex-wrap lg:w-4/5">
              <div className="mb-6 w-full lg:mb-0 lg:w-1/2 lg:py-6 lg:pr-10">
                <h1 className="title-font mb-4 text-3xl font-medium text-gray-900">
                  {recipe.name.toUpperCase()}
                </h1>
                <div className="mb-4 flex">
                  <a className="flex-grow border-b-2 border-yellow-500 px-1 py-2 text-lg text-yellow-500">
                    Description
                  </a>
                  <a className="flex-grow border-b-2 border-gray-300 px-1 py-2 text-lg">
                    Reviews
                  </a>
                  <a className="flex-grow border-b-2 border-gray-300 px-1 py-2 text-lg">
                    Details
                  </a>
                </div>
                <p className="mb-4 leading-relaxed">
                  Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                  sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
                  juiceramps cornhole raw denim forage brooklyn. Everyday carry
                  +1 seitan poutine tumeric. Gastropub blue bottle austin
                  listicle pour-over, neutra jean.
                </p>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Color</span>
                  <span className="ml-auto text-gray-900">Blue</span>
                </div>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Size</span>
                  <span className="ml-auto text-gray-900">Medium</span>
                </div>
                <div className="mb-6 flex border-b border-t border-gray-200 py-2">
                  <span className="text-gray-500">Quantity</span>
                  <span className="ml-auto text-gray-900">4</span>
                </div>
                <div className="flex">
                  <span className="title-font text-2xl font-medium text-gray-900">
                    $58.00
                  </span>
                  <button className="ml-auto flex rounded border-0 bg-yellow-500 px-6 py-2 text-white hover:bg-yellow-600 focus:outline-none">
                    Button
                  </button>
                  <button className="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-200 p-0 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  </button>
                </div>
              </div>
              <img
                alt="ecommerce"
                className="h-64 w-full rounded object-cover object-center lg:h-auto lg:w-1/2"
                src={recipe.image}
              />
            </div>
          </div>
        </section>
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
