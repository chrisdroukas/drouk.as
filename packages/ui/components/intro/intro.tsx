"use client";

import Link from "next/link";
import { FC } from "react";
import Balancer from "react-wrap-balancer";

import { Scene } from "@/components/intro/scene";
import { ButtonProps, buttonVariants } from "@/components/ui/button";
import { cn } from "@/library/utilities/classnames";

interface IntroButton {
  href: string;
  label: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
}

interface IntroProps {
  title: string;
  body: string;
  buttons?: IntroButton[];
}

export const Intro: FC<IntroProps> = ({ title, body, buttons }) => {
  return (
    <section className="relative h-screen max-h-[1000px] min-h-[500px] lg:min-h-[600px] select-none bg-zinc-300 dark:bg-zinc-900 cursor-default">
      <Scene />
      <div className="absolute w-full bottom-12">
        <div className="container flex flex-col gap-8">
          <h1 className="font-heading tracking-tight text-4xl lg:text-5xl">
            <Balancer>{title}</Balancer>
          </h1>

          {buttons ? (
            <div className="space-x-4">
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={cn(
                    buttonVariants({
                      variant: button.variant,
                      size: button.size,
                    })
                  )}
                >
                  {button.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};
