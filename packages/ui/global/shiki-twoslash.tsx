import { Global } from "@mantine/core";

export function ShikiTwoslash() {
  return (
    <Global
      styles={(theme) => ({
        "pre.shiki": {
          overflowX: "auto",
        },
        "pre.shiki:hover .dim": {
          opacity: 1,
        },
        "pre.shiki div.dim": {
          opacity: 0.5,
        },
        "pre.shiki div.dim, pre.shiki div.highlight": {
          margin: 0,
          padding: 0,
        },
        "pre.shiki div.highlight": {
          opacity: 1,
          backgroundColor: "#f1f8ff",
        },
        "pre.shiki div.line": {
          minHeight: "1rem",
        },
        /**
         * Don't show language identifiers.
         */
        "pre.shiki .language-id": {
          display: "none",
        },

        /*
         * Visually differentiates twoslash code samples.
         */
        "pre.twoslash": {
          borderColor: "#719af4",
        },

        /**
         * When you mouse over the pre, show the
         * underlines.
         */
        "pre.twoslash:hover data-lsp": {
          borderColor: "#747474",
        },
        /** The tooltip-like which provides the LSP response */
        "pre.twoslash data-lsp:hover::before": {
          content: "attr(lsp)",
          position: "absolute",
          transform: "translate(0, 1rem)",
          backgroundColor: "#3f3f3f",
          color: "#fff",
          textAlign: "left",
          padding: "5px 8px",
          borderRadius: "2px",
          // font-family: "JetBrains Mono", Menlo, Monaco, Consolas, Courier New, monospace;
          fontSize: "14px",
          whiteSpace: "pre-wrap",
          zIndex: 100,
        },
      })}
    />
  );
}
