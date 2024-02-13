/**
 * The `Todo` type is used to annotate types that have not been implemented yet,
 * or whose implementation is not immediately clear.
 *
 * @deprecated This type is a placeholder and should be removed once a formal type is available.
 */
export type Todo = unknown;

/**
 * The `Unsafe` type maps the passed type to a concrete type `T` in an unsafe manner, since
 * properties are not guaranteed to exist on the passed type. Use `Unsafe` in scenarios where
 * explicit checks may not be necessary, as in tests.
 *
 * For example:
 *
 * ```ts
 * type User = {
 *  id: number;
 *  name: string;
 *  email?: string;
 * };
 *
 * export type Unsafe<T> = T;
 *
 * function processUser(user: Unsafe<User>) {
 *  // Since it's an `Unsafe` type, we assume that all properties exist
 *  // and directly access them without additional checks.
 *  console.log(`Processing user: ${user.name} with ID: ${user.id}`);
 *
 *  // Note: Accessing a property that might not exist on `User` (like `email`) without checks
 *  // is dangerous and should only be done if you're certain of the data structure.
 *  if (user.email) {
 *      console.log(`Email: ${user.email}`);
 *  }
 * }
 *
 * // Note: `email` is missing.
 * const testUser = { id: 1, name: "John Doe" };
 *
 * // Casting to `Unsafe<User>` bypasses the type safety for missing `email`.
 * processUser(testUser as Unsafe<User>);
 * ```
 */
export type Unsafe<T> = T;
