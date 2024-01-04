"use client";

import { GithubIcon } from "lucide-react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

export default function GithubSignInButton() {
    return (
        <Button onClick={() => signIn('github')} variant="outline" size="icon">
          <GithubIcon className='w-4 h-4' />
        </Button>
    )
}