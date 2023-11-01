import type { ComponentPropsWithoutRef } from 'react';
import { Button } from "./button"

interface PrimaryButtonProps extends ComponentPropsWithoutRef<"button"> {
    children: React.ReactNode
}

const PrimaryButton = ({ children, ...rest }: PrimaryButtonProps) => {
    return (
        <Button {...rest} className="
        text-white
        bg-pueblo-500
        transition-all
        hover:bg-pueblo-600
        hover:scale-105
        active:bg-pueblo-700
        active:scale-100
        disabled:bg-pueblo-200
        disabled:text-pueblo-700
        ">
            {children}
        </Button>
    )
}

export default PrimaryButton;
