import React from "react";
import { Button } from "../ui/button";

export default function CommentForm() {

    return (
    <div>
        <div className="flex justify-start m-2">
            <textarea className="block w-full h-32 rounded px-2 bg-core-background-50" placeholder="Input you comment" />
        </div>

        <div className="flex justify-end m-2">
            <Button className="bg-core-accent-400 hover:bg-core-accent-500">Post</Button>
        </div>
    </div>
    );
}