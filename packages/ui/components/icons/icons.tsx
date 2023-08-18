import { SVGAttributes } from "react";

import {
  CodeIcon,
  Cross2Icon,
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
  menu: HamburgerMenuIcon,
  theme: { light: SunIcon, dark: MoonIcon, system: LaptopIcon },
  warning: ExclamationTriangleIcon,
};
