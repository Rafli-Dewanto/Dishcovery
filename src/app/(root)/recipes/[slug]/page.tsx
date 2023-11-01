import { prisma } from "@/lib/db"
import { getErrorMessage } from "@/utils/get-error"
import Image from "next/image"

const RecipeDetail = async ({ params }: { params: { slug: string } }) => {
    // recipe is type string | object recipe | null
    const { data: recipe, errorMessage: error } = await getRecipe(params.slug)

    // validation
    if (typeof recipe === 'object' && recipe !== null && recipe !== undefined) {
        return (
            <main className="min-h-screen container grid grid-cols-1 justify-items-center">
                <h1>{recipe?.name}</h1>
                <Image
                    className=""
                    width={300}
                    height={300}
                    src={recipe?.image}
                    alt={recipe?.name} />
                <p>Cuisine: {recipe?.cuisineType}</p>
                <pre>Calories: {recipe?.calories}</pre>
                <p>{recipe?.description}</p>
                <article
                    className="bg-red-400"
                    dangerouslySetInnerHTML={{ __html: recipe?.instructions }} />
            </main>
        )
    } else {
        return (
            <main className="min-h-screen container grid grid-cols-1 justify-items-center">
                <h1>Oops Something went wrong!</h1>
                <p>{error}</p>
            </main>
        )
    }
}

async function getRecipe(id: string) {
    let data;
    let errorMessage;
    try {
        data = await prisma.recipe.findFirst({
            where: {
                id: id
            }
        })
    } catch (error) {
        errorMessage = getErrorMessage(error)
        console.error(errorMessage)
    }
    return { data, errorMessage }
}

export default RecipeDetail