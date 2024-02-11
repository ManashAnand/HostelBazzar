import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options = {
  providers: [
    GithubProvider({
      profile(profile) {
        // console.log("Profile Github: ", profile);

        let userRole = "test@gmail.com";
        if (profile?.email == "test@gmail.com") userRole = "admin";
        
        else userRole = "user"

        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      profile(profile) {
        // console.log("Profile Google: ", profile);

        let userRole = "test@gmail.com";
        if (profile?.email == "test@gmail.com") userRole = "admin";
        else userRole = "user"

        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.Google_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret:process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (token) session.user.role = token.role;
      return session;
    },
  },
};
