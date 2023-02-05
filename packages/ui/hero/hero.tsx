import { FC } from "react";
import styled from "@emotion/styled";
import {
  createStyles,
  useMantineTheme,
  Container,
  Text,
  Stack,
} from "@mantine/core";
import { BaseComponentProps } from "../base-component";
import { useDebug } from "../hooks";

export interface HeroProps extends BaseComponentProps {
  title: string;
  body: string;
}

const BREAKPOINT = "@media (max-width: 755px)";

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 100dvh;
  display: flex;
  align-items: center;
`;

const useStyles = createStyles((theme) => ({
  inner: {
    position: "relative",
  },

  title: {
    fontFamily: theme.fontFamily,
    fontSize: 62,
    fontWeight: 700,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },
}));

export const Hero: FC<HeroProps> = (props: HeroProps) => {
  const { title, body, debug } = props;

  const { classes } = useStyles();
  const theme = useMantineTheme();

  useDebug(debug);

  return (
    <Wrapper>
      <Container>
        <Stack align={"stretch"} justify={"center"}>
          <h1 className={classes.title}>
            <Text
              component="span"
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
              inherit
            >
              {title}
            </Text>
          </h1>

          <Text className={classes.description} color="dimmed">
            {body}
          </Text>
        </Stack>
      </Container>
    </Wrapper>
  );
};
