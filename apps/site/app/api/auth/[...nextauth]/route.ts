import NextAuth from "next-auth";

import { authOptions } from "#/library/auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
