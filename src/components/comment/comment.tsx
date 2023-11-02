import { ArrowDown, ArrowUp } from "lucide-react";
import UserButton from "../ui/user-button";

export default function Comments() {
    return (
        <div>
            <div class="flex m-2">
                <UserButton/>
                {/* paragraf comment */}
                <p></p>
            </div>
            <div class="grid grid-row-3 m-2">
                <button class="active:bg-core-accent-50 w-6 justify-center hover:ring hover:ring-core-accent-50">
                    <ArrowUp/>
                </button>
                <span class="m-2">
                    0
                </span>
                <button class="active:bg-core-accent-50 w-6 justify-center hover:ring hover:ring-core-accent-50">
                    <ArrowDown/>
                </button>
            </div>
        </div>
    );
}