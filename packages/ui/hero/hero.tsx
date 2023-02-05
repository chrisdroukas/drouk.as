import { FC } from "react";
import styled from "@emotion/styled";
import {
  createStyles,
  useMantineTheme,
  Container,
  Title,
  Stack,
} from "@mantine/core";
import { BaseComponentProps } from "../base-component";
import { useDebug } from "../hooks";
import { MediaQuery } from "../media-query";

export interface HeroProps extends BaseComponentProps {
  title: string;
  body: string;
}

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 100dvh;
  display: flex;
  align-items: center;
`;

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: theme.fontFamily,
    fontSize: 62,
    lineHeight: 1.1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [MediaQuery(theme.breakpoints.sm)]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    fontSize: 24,
    [MediaQuery(theme.breakpoints.sm)]: {
      fontSize: 18,
    },
  },
}));

export const Hero: FC<HeroProps> = (props: HeroProps) => {
  const { title, body, debug } = props;

  const { classes } = useStyles();
  const theme = useMantineTheme();

  /**
   * Logs lifecycle events and debug messages to the console.
   *
   * Debug must be `false` for production builds.
   */
  useDebug(debug);

  const renderTitle = (
    <Title
      order={1}
      weight={"bold"}
      className={classes.title}
      variant="gradient"
      gradient={
        theme.colorScheme === "dark"
          ? {
              from: theme.colors.gray[5],
              to: theme.colors.gray[2],
            }
          : {
              from: theme.colors.gray[9],
              to: theme.colors.gray[6],
            }
      }
    >
      {title}
    </Title>
  );

  const renderBody = (
    <Title
      order={2}
      weight={"normal"}
      className={classes.description}
      color="dimmed"
    >
      {body}
    </Title>
  );

  return (
    <Wrapper>
      <Container>
        <Stack align={"stretch"} justify={"center"}>
          {renderTitle}
          {renderBody}
        </Stack>
      </Container>
    </Wrapper>
  );
};
