import type { ComponentPropsWithoutRef } from 'react';
import { Button } from './button';

interface PrimaryButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
}

const PrimaryButton = ({ children, ...rest }: PrimaryButtonProps) => {
  return (
    <Button
      {...rest}
      className="
        bg-pueblo-500
        text-white
        transition-all
        hover:scale-105
        hover:bg-pueblo-600
        active:scale-100
        active:bg-pueblo-700
        disabled:bg-pueblo-200
        disabled:text-pueblo-700
        "
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
