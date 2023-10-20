/*
 * Class representing an action handler for various keys.
 */
export class ActionHandler<T> {
  private actionMap = new Map<T, () => void>();

  /**
   * Initializes a new instance of the ActionHandler class.
   * @param actions An array of tuples where each tuple contains a key and a corresponding action function.
   */
  constructor(actions: [T, () => void][]) {
    this.actionMap = new Map<T, () => void>(actions);
  }

  /**
   * Handles the action associated with the given key.
   * @param actionKey The key associated with the action to be handled.
   */
  handle(actionKey: T): void {
    const action = this.actionMap.get(actionKey);
    if (action) {
      action();
    } else {
      console.error(`No action found for key: ${actionKey}`);
    }
  }

  /**
   * Adds or updates an action associated with the given key.
   * @param actionKey The key to associate the action with.
   * @param action The action function to add or update.
   */
  setAction(actionKey: T, action: () => void): void {
    this.actionMap.set(actionKey, action);
  }

  /**
   * Removes the action associated with the given key.
   * @param actionKey The key of the action to remove.
   */
  removeAction(actionKey: T): void {
    this.actionMap.delete(actionKey);
  }

  /**
   * Checks if an action is associated with the given key.
   * @param actionKey The key to check for an associated action.
   * @returns True if an action is associated with the key, otherwise false.
   */
  hasAction(actionKey: T): boolean {
    return this.actionMap.has(actionKey);
  }
}
