import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
};

/**
 * A container element.
 * @note `90rem` is equivalent to `1440px`.
 */
const ContainerElement = styled.div<Props>(
  { margin: "0 auto", maxWidth: "100vw", display: "grid" },
  ({ theme }) => ({
    paddingLeft: "2rem",
    paddingRight: "2rem",
    [theme.breakpoints.medium]: {
      paddingLeft: "4rem",
      paddingRight: "4rem",
    },
    [theme.breakpoints.large]: {
      maxWidth: "75rem",
      paddingLeft: "5rem",
      paddingRight: "5rem",
    },
  })
);

const Container = ({ children }: Props) => {
  return <ContainerElement>{children}</ContainerElement>;
};

export default Container;
