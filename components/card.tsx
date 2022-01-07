import React, { ReactNode, FunctionComponent } from "react";
import Grid from "./grid";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
};

/**
 * A container element.
 * @note `90rem` is equivalent to `1440px`.
 */
const ContainerElement = styled.div(({ theme }) => ({
  maxWidth: "100vw",
  padding: "3rem 2rem",
  borderRadius: "1rem",
  boxShadow: `0px 0px 8px ${theme.shadow}`,
  background: theme.surface.primary,
  [theme.breakpoints.medium]: {},
  [theme.breakpoints.large]: {},
}));

const TitleElement = styled.h2(({ theme }) => ({
  fontSize: "2rem",
  margin: 0,
}));

const DescriptionElement = styled.p(({ theme }) => ({
  margin: 0,
}));

const Card = React.forwardRef<HTMLDivElement, Props>(
  ({ title, description, children }, ref) => {
    const titleElement = title && <TitleElement>{title}</TitleElement>;
    const descriptionElement = description && (
      <DescriptionElement>{description}</DescriptionElement>
    );

    return (
      <ContainerElement ref={ref}>
        <Grid columns={2} columnGap="4rem">
          <Grid columns={1}>
            {titleElement}
            {descriptionElement}
          </Grid>
          {children}
        </Grid>
      </ContainerElement>
    );
  }
);

Card.displayName = "Card";

export default Card;
