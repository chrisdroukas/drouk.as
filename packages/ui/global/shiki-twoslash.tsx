import { Global } from "@mantine/core";

export function ShikiTwoslash() {
  return (
    <Global
      styles={() => ({
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
         * Suppresses language identifiers.
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
         * On hover, display Language Server Protocol underlines.
         */
        "pre.twoslash:hover data-lsp": {
          borderColor: "red",
        },
        /**
         * On hover, displays the Language Server Protocol response.
         */
        "pre.twoslash data-lsp:hover::before": {
          content: "attr(lsp)",
          position: "absolute",
          transform: "translate(0, 1.5rem)",
          backgroundColor: "#3f3f3f",
          color: "#fff",
          textAlign: "left",
          padding: "5px 8px",
          borderRadius: "2px",
          // font-family: "JetBrains Mono", Menlo, Monaco, Consolas, Courier New, monospace;
          fontSize: "12px",
          whiteSpace: "pre-wrap",
          zIndex: 100,
        },
        "pre .code-container": {
          overflow: "auto",
        },
        /*
         * A "Try" button.
         */
        "pre .code-container > a": {
          position: "absolute",
          right: "8px",
          bottom: "8px",
          borderRadius: "4px",
          border: "1px solid #719af4",
          padding: "0 8px",
          color: "#719af4",
          textDecoration: "none",
          opacity: 0,
          transitionTimingFunction: "ease",
          transition: "opacity 0.3s",
        },
        /*
         * When a user prefers reduced motion,
         * suppress animations.
         */
        "@media (prefers-reduced-motion: reduce)": {
          "pre .code-container > a": {
            transition: "none",
          },
        },
        "pre .code-container > a:hover": {
          color: "white",
          backgroundColor: "#719af4",
        },
        "pre .code-container:hover a": {
          opacity: 1,
        },

        "pre code": {
          fontSize: "15px",
          // font-family: "JetBrains Mono", Menlo, Monaco, Consolas, Courier New, monospace;
          whiteSpace: "pre",
          webkitOverflowScrolling: "touch",
        },
        "pre code a": {
          textDecoration: "none",
        },
        "pre data-err": {
          /* Extracted from VS Code */
          background: `url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%206%203'%20enable-background%3D'new%200%200%206%203'%20height%3D'3'%20width%3D'6'%3E%3Cg%20fill%3D'%23c94824'%3E%3Cpolygon%20points%3D'5.5%2C0%202.5%2C3%201.1%2C3%204.1%2C0'%2F%3E%3Cpolygon%20points%3D'4%2C0%206%2C2%206%2C0.6%205.4%2C0'%2F%3E%3Cpolygon%20points%3D'0%2C2%201%2C3%202.4%2C3%200%2C0.6'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E") repeat-x bottom left`,
          paddingBottom: "3px",
        },
        "pre .query": {
          marginBottom: "10px",
          color: "#137998",
          display: "inline-block",
        },
        /* In order to have the 'popped out' style design and to not break the layout
  /* we need to place a fake and un-selectable copy of the error which _isn't_ broken out
  /* behind the actual error message.

  /* This sections keeps both of those two in in sync  */

        "pre .error, pre .error-behind": {
          marginLeft: "-14px",
          marginTop: "8px",
          marginBottom: "4px",
          padding: "6px",
          paddingLeft: "14px",
          width: "calc(100% - 20px)",
          whiteSpace: "pre-wrap",
          display: "block",
        },
        "pre .error": {
          position: "absolute",
          backgroundColor: "#fee",
          borderLeft: "2px solid #bf1818",
          /* Give the space to the error code */
          display: "flex",
          alignItems: "center",
          color: "black",
        },
        "pre .error .code": {
          display: "none",
        },
        "pre .error-behind": {
          userSelect: "none",
          visibility: "transparent",
          color: "#fee",
        },
      })}
    />
  );
}
