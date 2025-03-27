import type { Metadata } from "next";
import "@/ui/globals.css";
import { fredoka, inika, inter } from "@/ui/fonts";

export const metadata: Metadata = {
  title: "LibroRent",
  description: "The best library app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fredoka.variable} ${inika.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
