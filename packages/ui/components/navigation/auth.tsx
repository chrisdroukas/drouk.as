import { FC } from "react";
import Link from "next/link";
import { cn } from "@/library/utilities";
import { buttonVariants } from "@/components/ui/button";

interface AuthProps {}

export const Auth: FC<AuthProps> = ({}: AuthProps) => {
  return (
    <Link
      href="/login"
      className={cn(
        buttonVariants({ variant: "secondary", size: "sm" }),
        "px-4"
      )}
    >
      Login
    </Link>
  );
};
