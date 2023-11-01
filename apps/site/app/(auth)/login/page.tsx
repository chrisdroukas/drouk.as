import { Metadata } from "next";
import Link from "next/link";

import { AuthenticationForm } from "#/components/authentication";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  console.log("ENV", process.env.DATABASE_URL, process.env.GITHUB_CLIENT_ID);
  return (
    <div className="container flex flex-1 w-screen items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Hello.</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to login to drouk.as/.
          </p>
        </div>
        <AuthenticationForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/register"
            className="hover:text-brand underline underline-offset-4"
          >
            Don't have an account? Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
