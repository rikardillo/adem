import { cva } from "class-variance-authority";
import React from "react";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({ variant, ...props }: ButtonProps) {
  return <button {...props} className={buttonVariants({ variant })} />;
}

function TailwindElm() {
  return (
    <div className="flex max-h-[4rem] w-full max-w-[20rem] items-center justify-center rounded-md px-4 py-2 font-semibold transition-all duration-200 hover:scale-105"></div>
  );
}

const buttonVariants = cva(
  "flex max-h-[3rem] w-full max-w-[20rem] items-center bg-gradient-to-r justify-center rounded-md px-4 py-2 font-semibold transition-all duration-200 hover:scale-105",
  {
    variants: {
      variant: {
        primary:
          " from-adem-primary-400 to-adem-primary-700 text-white hover:from-adem-secondary-400 hover:to-adem-secondary-600 hover:text-black",
        secondary:
          " from-adem-secondary-200 to-adem-secondary-400 text-black",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);
