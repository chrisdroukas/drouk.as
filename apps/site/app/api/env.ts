export const apiEnvironment = () => {
  return process.env.NEXT_PUBLIC_BASE_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL;
};
