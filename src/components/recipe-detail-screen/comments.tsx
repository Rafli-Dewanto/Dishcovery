/**
 * v0 by Vercel.
 * @see https://v0.dev/t/P7iM7GKI0We
 */
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from '@/components/ui/card';

export default function Comment() {
  return (
    <main className="space-y-8 bg-orange-50 p-10">
      <h2 className="text-3xl font-bold text-orange-800">Leave a Comment</h2>
      <div className="space-y-4 rounded-md bg-white p-5 shadow-md">
        <div className="space-y-2">
          <Label className="text-orange-800" htmlFor="comment">
            Your Comment
          </Label>
          <Textarea
            className="min-h-[100px] border-orange-200 focus:border-orange-500"
            id="comment"
            placeholder="Enter your comment"
          />
        </div>
        <Button className="bg-orange-500 text-white hover:bg-orange-600">
          Submit Comment
        </Button>
      </div>
      <h2 className="text-3xl font-bold text-orange-800">Comments</h2>
      <div className="space-y-6">
        <Card className="rounded-md bg-white shadow-md">
          <CardHeader className="flex items-start gap-2 p-5">
            <Avatar className="h-8 w-8 border-orange-200">
              <AvatarImage alt="@username" src="/placeholder-user.jpg" />
              <AvatarFallback className="text-orange-800">AC</AvatarFallback>
            </Avatar>
            <div className="text-sm font-semibold text-orange-800">
              @username
            </div>
          </CardHeader>
          <CardContent className="p-5">This is a comment.</CardContent>
          <CardFooter className="flex items-center justify-between border-t border-orange-200 p-5">
            <Button
              className="text-orange-500 hover:text-orange-600"
              variant="ghost"
            >
              Reply
            </Button>
            <Button
              className="text-orange-500 hover:text-orange-600"
              variant="ghost"
            >
              View Replies
            </Button>
          </CardFooter>
        </Card>
        <Card className="rounded-md bg-white shadow-md">
          <CardHeader className="flex items-start gap-2 p-5">
            <Avatar className="h-8 w-8 border-orange-200">
              <AvatarImage alt="@username2" src="/placeholder-user.jpg" />
              <AvatarFallback className="text-orange-800">BC</AvatarFallback>
            </Avatar>
            <div className="text-sm font-semibold text-orange-800">
              @username2
            </div>
          </CardHeader>
          <CardContent className="p-5">This is another comment.</CardContent>
          <CardFooter className="flex items-center justify-between border-t border-orange-200 p-5">
            <Button
              className="text-orange-500 hover:text-orange-600"
              variant="ghost"
            >
              Reply
            </Button>
            <Button
              className="text-orange-500 hover:text-orange-600"
              variant="ghost"
            >
              View Replies
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
