import { getUser } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { prisma } from '@/lib/db';
import { getErrorMessage } from '@/utils';
import { Session } from 'next-auth';
import type { User } from '@prisma/client';

async function getAuthenticatedUser(username: string) {
  const encodedUsername = encodeURI(username);
  try {
    const { session, error } = await getUser();

    if (error) {
      console.error(error);
      return redirect(`/auth/signin/callbackUrl=/${encodedUsername}}`);
    }

    return { session: session, error: null };
  } catch (error) {
    console.error(error);

    const errorMsg = getErrorMessage(error);
    return { session: null, error: errorMsg };
  }
}

async function getUserProfile(decodedUsername: string) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        name: decodedUsername,
      },
    });
    return { user: user, error: null };
  } catch (error) {
    console.error(error);
    const message = getErrorMessage(error);
    return { user: null, error: message };
  }
}

export default async function ProfilePage({
  params,
}: {
  params: { profile: string };
}) {
  const { session, error: sessionerror } = await getAuthenticatedUser(
    params.profile,
  );
  const { user, error: userError } = await getUserProfile(params.profile);

  if (userError) {
    return <main>user not found</main>;
  }

  if (sessionerror) {
    return redirect('/auth/signin/callbackUrl=/');
  }

  const isAccountOwner = session?.user?.name === decodeURI(params.profile);

  return (
    <div>
      {isAccountOwner ? (
        <ProfileOwner session={session} />
      ) : (
        <ProfileViewer user={user as User} />
      )}
    </div>
  );
}

function ProfileOwner({ session }: { session: Session }) {
  return (
    <main className="container mx-auto w-full space-y-8 p-6">
      <section className="flex flex-col items-center space-y-4">
        <Avatar className="h-24 w-24">
          <AvatarImage
            alt="User profile"
            src={session?.user?.image as string}
          />
          <AvatarFallback>USER</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold">{session?.user?.name}</h1>
        <p className="max-w-xs text-center text-gray-500">User owner</p>
      </section>
      <section className="mx-auto max-w-[40%] space-y-4">
        <h2 className="text-xl font-semibold">Settings</h2>
        <Button className="w-full">Change Profile Picture</Button>
        <Button className="w-full">Update Bio</Button>
      </section>
      <section className="flex justify-around">
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold">120</p>
          <p className="text-sm text-gray-500">Followers</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold">210</p>
          <p className="text-sm text-gray-500">Posts</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold">15k</p>
          <p className="text-sm text-gray-500">Likes</p>
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Activity</h2>
        <Card className="space-y-2 p-4">
          <CardHeader>
            <CardTitle>Latest Post</CardTitle>
            <CardDescription>Posted 2 hours ago</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is a brief excerpt of the user&apos;s latest post ...</p>
          </CardContent>
        </Card>
        <Card className="space-y-2 p-4">
          <CardHeader>
            <CardTitle>Recently Liked</CardTitle>
            <CardDescription>Liked a post 30 minutes ago</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is a brief excerpt of the post user recently liked ...</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

async function ProfileViewer({ user }: { user: User }) {
  return (
    <main className="container mx-auto w-full space-y-8 p-6">
      <section className="flex flex-col items-center space-y-4">
        <Avatar className="h-24 w-24">
          <AvatarImage alt="User profile" src={user?.image as string} />
          <AvatarFallback>USER</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold">{user?.name}</h1>
        <p className="max-w-xs text-center text-gray-500">not user owner</p>
      </section>
      <section className="mx-auto max-w-[40%] space-y-4">
        <h2 className="text-xl font-semibold">Settings</h2>
        <Button className="w-full">Change Profile Picture</Button>
        <Button className="w-full">Update Bio</Button>
      </section>
      <section className="flex justify-around">
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold">120</p>
          <p className="text-sm text-gray-500">Followers</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold">210</p>
          <p className="text-sm text-gray-500">Posts</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold">15k</p>
          <p className="text-sm text-gray-500">Likes</p>
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Activity</h2>
        <Card className="space-y-2 p-4">
          <CardHeader>
            <CardTitle>Latest Post</CardTitle>
            <CardDescription>Posted 2 hours ago</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is a brief excerpt of the user&apos;s latest post ...</p>
          </CardContent>
        </Card>
        <Card className="space-y-2 p-4">
          <CardHeader>
            <CardTitle>Recently Liked</CardTitle>
            <CardDescription>Liked a post 30 minutes ago</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is a brief excerpt of the post user recently liked ...</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
