import { Metadata } from "next";
import Link from "next/link";

import { AuthenticationForm } from "#/components/authentication";
import { Strings } from "@/library/strings";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className="container flex flex-1 w-screen items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            {Strings.login.title}
          </h1>
          <p className="text-sm text-muted-foreground">{Strings.login.body}</p>
        </div>
        <AuthenticationForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/register"
            className="hover:text-brand underline underline-offset-4"
          >
            {Strings.login.signup}
          </Link>
        </p>
      </div>
    </div>
  );
}
