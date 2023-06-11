import { useDebug } from "./";
import { Strings } from "../strings";
import useTilg from "tilg";

const TilgString = "Foo";

jest.mock("tilg", () => jest.fn());

describe("useDebug", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    process.env.NODE_ENV = "development";
  });

  afterEach(() => {
    process.env.NODE_ENV = "test";
  });

  it("calls useTilg if enabled and in development.", () => {
    useDebug(true, TilgString);
    expect(useTilg).toHaveBeenCalledWith(TilgString);
  });

  it("throws an error if enabled and in production.", () => {
    process.env.NODE_ENV = "production";

    expect(() => useDebug(true, TilgString)).toThrowError(
      Strings.debug.failure
    );
  });

  it("does not call useTilg if not enabled.", () => {
    useDebug(false, TilgString);
    expect(useTilg).not.toHaveBeenCalled();
  });
});
