import { ActionHandler } from "./action";

describe("ActionHandler", () => {
  let actionHandler: ActionHandler<string>;
  const actions: [string, () => void][] = [
    ["foo", jest.fn(() => console.log("Handling foo"))],
    ["bar", jest.fn(() => console.log("Handling bar"))],
  ];

  beforeEach(() => {
    actionHandler = new ActionHandler<string>(actions);
  });

  test("should handle existing actions", () => {
    const actionFn = actions.find(([key]) => key === "foo")?.[1];
    if (!actionFn) {
      throw new Error('Action for key "foo" not found');
    }

    actionHandler.handle("foo");
    expect(actionFn).toHaveBeenCalled();
  });

  test("should not handle non-existing actions", () => {
    console.error = jest.fn();

    actionHandler.handle("baz");
    expect(console.error).toHaveBeenCalledWith("No action found for key: baz");
  });

  test("should add and handle new actions", () => {
    const newAction = jest.fn(() => console.log("Handling baz"));
    actionHandler.setAction("baz", newAction);

    actionHandler.handle("baz");
    expect(newAction).toHaveBeenCalled();
  });

  test("should remove actions", () => {
    actionHandler.removeAction("foo");

    console.error = jest.fn();
    actionHandler.handle("foo");
    expect(console.error).toHaveBeenCalledWith("No action found for key: foo");
  });

  test("should check for action existence", () => {
    expect(actionHandler.hasAction("foo")).toBe(true);
    expect(actionHandler.hasAction("baz")).toBe(false);
  });
});
