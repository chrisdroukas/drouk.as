import { ReactNode, FunctionComponent } from "react";
import styled, { DefaultTheme } from "styled-components";

type Props = {
  children?: ReactNode;
  columns?: number;
  rowGap?: string;
  columnGap?: string;
};

const GridElement = styled.div<Props>(
  {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridGap: "1rem",
  },
  ({ rowGap, columnGap }) => ({
    rowGap: rowGap,
    columnGap: columnGap,
  }),
  ({ theme, columns }) => ({
    [theme.breakpoints.medium]: {
      gridTemplateColumns: `repeat(${columns ? columns : 2}, 1fr)`,
    },
    [theme.breakpoints.large]: {
      gridTemplateColumns: `repeat(${columns ? columns : 3}, 1fr)`,
    },
  })
);

const Grid = ({ children, columns, rowGap, columnGap }: Props) => {
  return (
    <GridElement columns={columns} rowGap={rowGap} columnGap={columnGap}>
      {children}
    </GridElement>
  );
};

export default Grid;
