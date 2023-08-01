import { FC } from "react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { SiteConfiguration } from "@/types";
import { Icons } from "@/components/icons";
import { ThemeSelector } from "@/components/theme-selector";

interface FooterProps {
  configuration: SiteConfiguration;
}

export const Footer: FC<FooterProps> = ({ configuration }) => {
  return (
    <footer>
      <div className="text-muted-foreground container flex flex-col items-center justify-between gap-4 py-10 select-none sm:h-20 sm:flex-row sm:py-0">
        <div className="flex flex-col items-center gap-4 px-8 sm:flex-row sm:gap-2 sm:px-0">
          <Icons.code className="hidden sm:block" />
          <p className="text-center text-sm leading-normal sm:text-left">
            <Balancer>
              Source code for{" "}
              <Link
                href={configuration.links.url}
                target="_blank"
                rel="noreferrer"
                className="font-medium transition-colors hover:text-foreground/80 underline underline-offset-4"
              >
                drouk.as/
              </Link>{" "}
              is available on{" "}
              <Link
                href={configuration.links.github}
                target="_blank"
                rel="noreferrer"
                className="font-medium transition-colors hover:text-foreground/80 underline underline-offset-4"
              >
                GitHub
              </Link>
              .
            </Balancer>
          </p>
        </div>
        <ThemeSelector />
      </div>
    </footer>
  );
};
