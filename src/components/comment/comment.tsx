import { ArrowDown, ArrowUp } from "lucide-react";

export default function Comments() {
    return (
        <div>
            <div className="flex m-2">
                {/* paragraf comment */}
                <p></p>
            </div>
            <div className="grid grid-row-3 m-2">
                <button className="active:bg-core-accent-50 w-6 justify-center hover:ring hover:ring-core-accent-50">
                    <ArrowUp/>
                </button>
                <span className="m-2">
                    0
                </span>
                <button className="active:bg-core-accent-50 w-6 justify-center hover:ring hover:ring-core-accent-50">
                    <ArrowDown/>
                </button>
            </div>
        </div>
    );
}