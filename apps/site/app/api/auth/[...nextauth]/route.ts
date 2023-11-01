import NextAuth from "next-auth";

import { authOptions } from "#/library/auth";

console.log("REACHED");
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
