import { redirect } from "next/navigation";

import { authOptions } from "../../../library/auth";

import { getCurrentUser } from "../../../library/session";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  return <div>Hello, {user.name}!</div>;
}
