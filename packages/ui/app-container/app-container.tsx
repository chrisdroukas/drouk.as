import { FC } from "react";
import { Navbar, ScrollArea } from "@mantine/core";
import { BaseComponentProps } from "../base-component";
import { useDebug } from "../hooks";

export interface AppContainerProps extends BaseComponentProps {}

export const AppContainer: FC<AppContainerProps> = (
  props: AppContainerProps
) => {
  const { debug } = props;

  /**
   * Logs lifecycle events and debug messages to the console.
   *
   * Debug must be `false` for production builds.
   */
  useDebug(debug);

  return (
    <Navbar height={600} p="xs" width={{ base: 300 }}>
      <Navbar.Section mt="xs">{/* Header with logo */}</Navbar.Section>

      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        {/* scrollable content here */}
      </Navbar.Section>

      <Navbar.Section>{/* Footer with user */}</Navbar.Section>
    </Navbar>
  );
};
