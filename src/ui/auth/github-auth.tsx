import { Github } from "@/ui/logoes/github";
import { Button } from "../components/button";
import { githubAuth } from "@/auth/authenticate";

export default function GithubAuth() {
  return (
    <form action={githubAuth}>
      <Button className="w-full flex justify-center items-center text-foreground bg-white hover:!bg-gray-100  border-1 border-gray-400   gap-3 focus-visible:!outline-gray-200 active:!bg-gray-200  [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0">
        <Github />
        Continue with GitHub
      </Button>
    </form>
  );
}
