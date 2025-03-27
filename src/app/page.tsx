import { adminPageSecurity } from "@/auth/security";
import { LogOutButton } from "@/ui/auth/logout-button";
import LibroLogo from "@/ui/logoes/libro";
import Link from "next/link";

export default function MainPage() {
  return (
    <main className="flex flex-col  bg-background w-screen h-screen p-5 bg-conic-gradient">
      <div className="flex flex-col h-[calc(67%+2.5vw)] ">
        <div className="flex justify-between  w-[clamp(280px,100%,1120px)] self-center">
          <LibroLogo />
          <Link
            href="/login"
            className=" text-2xl text-foreground font-bold font-fredoka m-0"
          >
            Login
          </Link>
        </div>
        <h1 className="text-foreground text-center text-2xl font-fredoka font-bold m-auto">
          " Explore. Read.
          <br /> Get Inspired. "
        </h1>
      </div>
      <Link className=" mx-auto" href="/register">
        <p
          className="w-54  text-center text-2xl text-foreground font-bold font-fredoka bg-background 
        border-[2.5px] border-black rounded-md py-1 shadow-base"
        >
          Join now
        </p>
      </Link>
    </main>
  );
}
