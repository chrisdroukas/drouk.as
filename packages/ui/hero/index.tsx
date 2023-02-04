import styled from "@emotion/styled";
import { createStyles, useMantineTheme, Container, Text } from "@mantine/core";
import { useDebug } from "../hooks";

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
    paddingTop: 200,
    paddingBottom: 120,

    [BREAKPOINT]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },

  title: {
    fontFamily: `${theme.fontFamily}`,
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
    marginTop: theme.spacing.xl,
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

export function HeroTitle() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Wrapper>
      <Container size="sm" className={classes.inner}>
        <h1 className={classes.title}>
          <Text
            component="span"
            variant="gradient"
            gradient={{
              from: theme.colors.grape[5],
              to: theme.colors.indigo[2],
            }}
            inherit
          >
            Chris Droukas is a design technologist in New York.
          </Text>
        </h1>

        <Text className={classes.description} color="dimmed">
          Designing at Goldman Sachs for Goldman Sachs Developer and Marquee.
          Previously: Priceline, SocialCode, and Washington Post Labs.
        </Text>
      </Container>
    </Wrapper>
  );
}
