import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "outline";
}

export function Button({
  children,
  variant = "primary",
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        className,
        "flex w-full py-[6.5px] my-1 gap-1 items-center leading-tight  box-border shadow-base border-[1.5px]  border-foreground justify-center cursor-pointer rounded-sm text-lg font-medium font-fredoka transition-colors  focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-opacity-80 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        {
          "bg-primary text-background hover:bg-primary-400 focus-visible:outline-primary active:bg-primary-600":
            variant === "primary",
          "bg-background text-foreground hover:bg-gray-400 focus-visible:outline-gray-500 active:bg-gray-500":
            variant === "secondary",
          "bg-red-500 text-white hover:bg-red-600 focus-visible:outline-red-600 active:bg-red-700":
            variant === "danger",
          "border-2 border-gray-900 text-gray-900 bg-transparent hover:bg-gray-100 focus-visible:outline-gray-900 active:bg-gray-200":
            variant === "outline",
        }
      )}
    >
      {children}
    </button>
  );
}
