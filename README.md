# drouk.as

Meet [drouk.as](https://drouk.as/), the world's most overengineered personal site.

## About this Repository

[drouk.as](https://drouk.as/) is a monorepo backed by [Turborepo](https://turbo.build/repo) and [pnpm](https://pnpm.io).

### Apps and Packages

This repository includes the following apps and packages:

| App/Package            | Contents                                                                                                               |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `site`                 | A [Next.js 14](https://nextjs.org/) app powering the main [drouk.as](https://drouk.as/) site.                          |
| `workshop`             | A [Storybook 7](https://storybook.js.org/) deployment running on [Vite](https://vitejs.dev) for component development. |
| `ui`                   | A React component library consumed by all applications in the `apps` directory.                                        |
| `eslint-config-custom` | `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`).                                  |
| `tsconfig`             | `tsconfig.json`s used throughout the monorepo.                                                                         |

Each package is pure [TypeScript](https://www.typescriptlang.org/), and (where applicable) uses [SWC](https://swc.rs/) for super fast compilation and bundling.

Really living in the future, here.

### Utilities

This repository contains the following utilities:

- [TypeScript](https://www.typescriptlang.org/) for static type checking.
- [ESLint](https://eslint.org/) for code linting.
- [Prettier](https://prettier.io) for code formatting.

### Installing Dependencies

To install all project dependencies, run the following command:

```sh
pnpm install
```

To add dependencies to a package, run one of the following commands:

```sh
# Saves to dependencies
pnpm add <package>

# Saves the next-tagged version to dependencies
pnpm add <package>@next

# Saves the specified version to dependencies
pnpm add <package>@1.0.0

# Saves to devDependencies
pnpm add -D <package>

# Saves to optionalDependencies
pnpm add -O <package>
```

Prefer specific (`1.7.3`) instead of approximate or compatible (` ~1.7.0` or `^1.7.0 `) versioning, and use [Renovate](https://docs.renovatebot.com/) to keep dependencies up-to-date.

### Develop

To develop all apps and packages, run the following command:

```sh
pnpm run dev
```

Alternatively, `cd` into individual packages and run this command for each package you want to run.

### Build

To build all apps and packages, run the following command:

```sh
pnpm run build
```

### Remote Caching

This repository uses Turborepo's [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling shared build caches locally and in CI/CD pipelines.

Remote Caching requires a [Vercel account](https://vercel.com/signup). Once created, authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview):

```sh
pnpm dlx turbo login
```

Next, link the repository to the Remote Cache by running the following command from the project root:

```sh
pnpm dlx turbo link
```
