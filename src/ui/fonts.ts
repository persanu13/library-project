import { Inter, Inika, Fredoka } from "next/font/google";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const inika = Inika({
  variable: "--font-inika",
  weight: ["400", "700"],
});

export const fredoka = Fredoka({
  variable: "--font-fredoka",
  weight: ["300", "400", "500", "600", "700"],
});
