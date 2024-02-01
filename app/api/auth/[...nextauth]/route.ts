import NextAuth from "next-auth/next";
// import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

// export const authOption = {
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID ?? "",
//       clientSecret: process.env.GITHUB_SECRET ?? "",
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
// };
export const authOption = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
