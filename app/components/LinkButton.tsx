import React, { HTMLProps, ReactNode } from "react";

import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const styles = cva("h-full w-full rounded p-1", {
  variants: {
    intents: {
      primary: "bg-cyan-600 text-white hover:bg-cyan-700",
      secondary: "bg-gray-400 text-white hover:bg-gray-500 dark:bg-gray-600",
      success: "bg-green-400 text-white hover:bg-green-500",
      error: "bg-red-400 text-white hover:bg-red-500",
      primary_outline:
        "border-[1px] border-solid border-cyan-600 bg-white text-gray-600 hover:bg-cyan-50 dark:bg-gray-950 dark:hover:bg-cyan-900",
      secondary_outline:
        "border-[1px] border-solid border-gray-300 bg-white text-gray-600 hover:bg-gray-50 dark:bg-gray-950 dark:hover:bg-gray-900",
      none: "",
    },
  },
  defaultVariants: {
    intents: "primary",
  },
});

type Props = {
  href: string
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
} & VariantProps<typeof styles>;

export default function LinkButton({
  href,
  children,
  className,
  type = "button",
  intents,
  ...props
}: Props & HTMLProps<HTMLButtonElement>) {
  return (
    <Link href={href}>
      <button
        type={type}
        className={twMerge(clsx(styles({ intents, className }), className))}
        {...props}
      >
        {children}
      </button>
    </Link>
  );
}