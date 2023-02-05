import { Component, ErrorInfo, ReactNode } from "react";
import { Strings } from "../strings";

interface ErrorBoundaryProps {
  /**
   * The default interface.
   */
  children?: ReactNode;

  /**
   * A fallback interface in the event an error occurs.
   */
  errorChildren: ReactNode;
}

interface ErrorBoundaryState {
  /**
   * When true, the next render shows the `errorChildren` interface.
   */
  hasError: boolean;
}

/**
 * Error Boundary is a wrapper component for
 * handling errors that may occur in the application.
 *
 * @see https://reactjs.org/docs/error-boundaries.html
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  /**
   * `getDerivedStateFromError` is an SSR-compatible render phase lifecycle
   * event and can be used to enable error handling on the server.
   *
   * When an error occurs, this event updates state — in our case, `hasError` —
   * and that state change triggers rerender with `errorChildren` in place
   * of `children`.
   */
  public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  /**
   * Don't use `componentDidCatch` for error recovery, since it forces
   * the `errorChildren` interface to always render synchronously.
   */
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(Strings.errorBoundary.didCatch, error, errorInfo);
  }

  public render() {
    const { children, errorChildren } = this.props;

    if (this.state.hasError) {
      return errorChildren;
    }

    return children;
  }
}

export default ErrorBoundary;
