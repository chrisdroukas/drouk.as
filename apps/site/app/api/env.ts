export const apiEnvironment = () => {
  return (
    `http://${process.env.NEXT_PUBLIC_BASE_URL}/api` ??
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
  );
};
