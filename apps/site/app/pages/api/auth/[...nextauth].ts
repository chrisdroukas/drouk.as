import NextAuth from "next-auth";

import { authOptions } from "../../../../library/auth";

// @see ./lib/auth
export default NextAuth(authOptions);
