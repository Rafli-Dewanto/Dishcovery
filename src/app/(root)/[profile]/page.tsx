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

export default async function ProfilePage({
  params,
}: {
  params: { profile: string };
}) {
  let user;
  try {
    console.log(params.profile); // name doesn't exists
    console.log(decodeURI(params.profile));
    user = await prisma.user.findFirstOrThrow({
      where: {
        name: decodeURI(params.profile),
      },
    });
    console.log(user);
  } catch (error) {
    console.error(error);
  }
  if (user == null) {
    return <main>not found</main>;
  }

  return (
    <main className="container mx-auto w-full space-y-8 p-6">
      <section className="flex flex-col items-center space-y-4">
        <Avatar className="h-24 w-24">
          <AvatarImage alt="User profile" src={user?.image as string} />
          <AvatarFallback>USER</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold">{user?.name}</h1>
        <p className="max-w-xs text-center text-gray-500">
          Short bio about the user which can span multiple lines and is center
          aligned for better readability.
        </p>
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
