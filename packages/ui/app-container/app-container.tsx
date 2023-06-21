import { FC, ReactNode } from "react";
import {
  AppShell,
  Navbar,
  // Header,
  // Aside,
  // Footer,
  ScrollArea,
} from "@mantine/core";

import { BaseComponentProps } from "../base-component";
import { useDebug } from "../hooks";

export interface AppContainerProps extends BaseComponentProps {
  children?: ReactNode;
}

export const AppContainer: FC<AppContainerProps> = (
  props: AppContainerProps
) => {
  const { children, debug } = props;

  /**
   * Logs lifecycle events and debug messages to the console.
   *
   * Debug must be `false` for production builds.
   */
  useDebug(debug);

  return (
    <AppShell>
      <Navbar height={"100dvh"} p="xs" width={{ base: 260 }}>
        <Navbar.Section>drouk.as/</Navbar.Section>

        <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </Navbar.Section>
      </Navbar>
      {children}
    </AppShell>
  );
};
