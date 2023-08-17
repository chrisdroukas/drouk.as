export const apiEnvironment = () => {
  switch (process.env.VERCEL_ENV) {
    case "development":
      return `http://${process.env.NEXT_PUBLIC_BASE_URL}/api`;
    default:
      return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`;
  }
};
