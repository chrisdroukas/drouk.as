import { ReactNode, FunctionComponent } from "react";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
};

/**
 * A container element.
 * @note `90rem` is equivalent to `1440px`.
 */
const ContainerElement = styled.div(({ theme }) => ({
  margin: "0 auto",
  maxWidth: "100vw",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  display: "grid",
  [theme.breakpoints.medium]: {
    maxWidth: "100vw",
    paddingLeft: "4rem",
    paddingRight: "4rem",
  },
  [theme.breakpoints.large]: {
    maxWidth: "90rem",
    paddingLeft: "5rem",
    paddingRight: "5rem",
  },
}));

const Container: FunctionComponent = ({ children }: Props) => {
  return <ContainerElement>{children}</ContainerElement>;
};

export default Container;
