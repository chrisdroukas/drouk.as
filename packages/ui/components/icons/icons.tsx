import { SVGAttributes } from "react";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CodeIcon,
  Cross2Icon,
  DotsHorizontalIcon,
  ExclamationTriangleIcon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
  LaptopIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";

export interface IconProps extends SVGAttributes<SVGElement> {
  children?: never;
  color?: string;
}

export type Icon = IconProps;

/**
 * Remaps Radix Icons to a set consumed by applications.
 */
export const Icons = {
  close: Cross2Icon,
  code: CodeIcon,
  gitHub: GitHubLogoIcon,
  loading: DotsHorizontalIcon,
  menu: HamburgerMenuIcon,
  navigation: {
    back: ArrowLeftIcon,
    forward: ArrowRightIcon,
  },
  theme: { light: SunIcon, dark: MoonIcon, system: LaptopIcon },
  warning: ExclamationTriangleIcon,
};
