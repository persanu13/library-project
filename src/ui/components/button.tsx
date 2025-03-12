import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "flex h-12 items-center justify-center cursor-pointer rounded-lg bg-primary px-4 text-xl font-bold font-inter text-background transition-colors hover:bg-primary-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:bg-primary-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        className
      )}
    >
      {children}
    </button>
  );
}
