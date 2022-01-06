import React, { ReactNode, FunctionComponent } from "react";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
  title?: string;
};

/**
 * A container element.
 * @note `90rem` is equivalent to `1440px`.
 */
const ContainerElement = styled.div(({ theme }) => ({
  margin: "0 auto",
  maxWidth: "100vw",
  padding: "2rem",
  borderRadius: "1rem",
  boxShadow: `0px 0px 8px ${theme.shadow}`,
  background: theme.surface.primary,
  [theme.breakpoints.medium]: {},
  [theme.breakpoints.large]: {},
}));

// const Card2: React.FC<Props> = React.forwardRef<HTMLUListElement, Props>

const Card = React.forwardRef<HTMLDivElement, Props>(
  ({ title, children }, ref) => {
    const titleElement = title && (
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        {title}
      </h2>
    );

    return (
      <ContainerElement ref={ref}>
        {titleElement}
        {children}
      </ContainerElement>
    );
  }
);

Card.displayName = "Card";

export default Card;
