import { ComponentProps, ReactNode } from "react";

type ButtonAttrs = ComponentProps<"button">;

interface ButtonProps extends ButtonAttrs {
  children: ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={`submit-button border border-[var(--border-color)] 
        from-zinc-800 to-zinc-900 rounded-md px-3 py-[10px] w-full cursor-pointer 
        hover:shadow-2xl z-999 hover:brightness-110`}
        {...props}
    >
      {children}
    </button>
  );
};
