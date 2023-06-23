import { FC } from "react";
import Link from "next/link";

import { classnames } from "@/library";
import { ButtonSize, ButtonVariant, buttonVariants } from "@/components/button";

interface IntroButton {
  href: string;
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

interface IntroProps {
  title: string;
  body: string;
  buttons?: IntroButton[];
}

export const Intro: FC<IntroProps> = ({ title, body, buttons }) => {
  return (
    <section className="space-y-6 pb-8 pt-24 select-none md:pt-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl">
          {title}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {body}
        </p>
        {buttons ? (
          <div className="space-x-4">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={classnames(
                  buttonVariants({ variant: button.variant, size: button.size })
                )}
              >
                {button.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};
