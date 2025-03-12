import Image from "next/image";

interface LibroLogoProps {
  size?: "small" | "medium" | "big";
}

export default function LibroLogo({ size = "medium" }: LibroLogoProps) {
  const sizeClasses = {
    small: {
      text: "text-[24px]",
      image: { width: 30, height: 60 },
      gap: "gap-2",
    },
    medium: {
      text: "text-[30px]",
      image: { width: 36, height: 100 },
      gap: "gap-3",
    },
    big: {
      text: "text-[48px]",
      image: { width: 70, height: 140 },
      gap: "gap-4",
    },
  };

  return (
    <div
      className={`${sizeClasses[size].gap} flex flex-row items-center font-fredoka font-bold leading-none`}
    >
      <h1 className={`${sizeClasses[size].text} text-foreground`}>
        Libro<span className="text-primary">Rent</span>
      </h1>
      <Image
        src="/book.svg"
        alt="book"
        width={sizeClasses[size].image.width}
        height={sizeClasses[size].image.height}
      />
    </div>
  );
}
