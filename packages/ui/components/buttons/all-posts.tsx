"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/library/utilities/classnames";
import Link, { LinkProps } from "next/link";
import { FC } from "react";

interface AllPostsButtonProps extends LinkProps {}

export const AllPostsButton: FC<AllPostsButtonProps> = ({ href }) => {
  return (
    <Link className={cn("flex items-center")} href={href}>
      <Button variant="outline">
        <Icons.navigation.back className="mr-2 h-4 w-4" />
        All Posts
      </Button>
    </Link>
  );
};
