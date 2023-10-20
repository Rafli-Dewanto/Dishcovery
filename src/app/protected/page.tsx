import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options } from "../api/auth/[...nextauth]/options";

export default async function ProtectedPage() {
    const session = await getServerSession(options);

    if (!session || !session.user) {
        redirect('/api/auth/signin?callbackUrl=/protected') // redirect to this page after sign in
    }

    return (
        <>
            <section>
                hello {session?.user?.name}
            </section>
        </>
    )
}
