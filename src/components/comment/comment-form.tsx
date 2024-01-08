import React from "react";
import { Button } from "../ui/button";
import UserButton from "../ui/user-button";

export default function CommentForm() {

    return (
    <div>
        <div class="flex justify-start m-2">
            <UserButton/>
            <textarea class="block w-full h-32 rounded px-2 bg-core-background-50" placeholder="Input you comment" />
        </div>

        <div class="flex justify-end m-2">
            <Button className="bg-core-accent-400 hover:bg-core-accent-500">Post</Button>
        </div>
    </div>
    );
}