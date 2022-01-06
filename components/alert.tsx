import Container from "./container";
import styled from "styled-components";
import Link from "next/link";
import { EXAMPLE_PATH } from "../lib/constants";

type Props = {
  preview?: boolean;
};

/**
 * The outermost container for an alert.
 */
const AlertContainer = styled.div(({ theme }) => ({
  paddingTop: "1rem",
  paddingBottom: "1rem",
  background: theme.surface.primary,
  borderBottomColor: theme.border.secondary,
  borderBottomStyle: "solid",
  borderBottomWidth: "1px",
  textAlign: "center",
}));

const Alert = ({ preview }: Props) => {
  return (
    <AlertContainer>
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              I&apos;m running The Brooklyn Half and raising $2,500 in support
              of Dana-Farber Cancer Institute.{" "}
              <Link href="/run/bk">Learn more</Link>
            </>
          )}
        </div>
      </Container>
    </AlertContainer>
  );
};

export default Alert;
