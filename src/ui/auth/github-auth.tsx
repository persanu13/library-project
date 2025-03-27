import { Button } from "../components/button";
import { githubAuth } from "@/auth/authenticate";
import Image from "next/image";

export default function GithubAuth() {
  return (
    <form action={githubAuth}>
      <Button
        variant="secondary"
        className="mt-6  [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0"
      >
        <Image src="/github.svg" alt="github logo" width={20} height={20} />
        <span className="m-0 p-0 flex leading-tight">Continue with GitHub</span>
      </Button>
    </form>
  );
}
