"use client";

import React, { FC, ReactNode, forwardRef } from "react";
import Link from "next/link";
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
  buttons?: IntroButton[];
  children?: ReactNode;
}

const IntroSection = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => (
  <section
    ref={ref}
    {...props}
    className={cn(
      "relative h-screen max-h-[1000px] min-h-[500px] lg:min-h-[600px] select-none bg-neutral-200 dark:bg-neutral-900 cursor-default",
      props.className
    )}
  />
));
IntroSection.displayName = "IntroSection";

const IntroContent = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => (
  <div
    ref={ref}
    {...props}
    className={cn("container flex flex-col gap-8", props.className)}
  />
));
IntroContent.displayName = "IntroContent";

const IntroTitle = forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h1">
>(({ children, ...props }, ref) => (
  <h1
    ref={ref}
    {...props}
    className={cn(
      "font-heading tracking-tight text-4xl lg:text-5xl",
      props.className
    )}
  >
    <Balancer>{children}</Balancer>
  </h1>
));
IntroTitle.displayName = "IntroTitle";

const IntroButtons = ({ buttons }: { buttons: IntroButton[] }) => (
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
);

const IntroContainer = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => (
  <div
    ref={ref}
    {...props}
    className={cn("absolute w-full bottom-12", props.className)}
  />
));
IntroContainer.displayName = "IntroContainer";

export const Intro: FC<IntroProps> = ({ title, buttons, children }) => {
  return (
    <IntroSection>
      {children}
      <Scene />
      <IntroContainer>
        <IntroContent>
          <IntroTitle>{title}</IntroTitle>
          {buttons && <IntroButtons buttons={buttons} />}
        </IntroContent>
      </IntroContainer>
    </IntroSection>
  );
};
