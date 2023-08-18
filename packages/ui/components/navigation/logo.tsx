import { FC } from "react";
import Link from "next/link";

interface LogoProps {
  title: string;
}

export const Logo: FC<LogoProps> = ({ title }: LogoProps) => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <span className="inline-block font-extrabold tracking-tight">
        {title}
      </span>
    </Link>
  );
};
