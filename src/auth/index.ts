import NextAuth, { NextAuthConfig, User } from "next-auth"
import Credentials from "next-auth/providers/credentials"

const authOptions: NextAuthConfig = {
  secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials): Promise<User | null> {
        const users = [
          {
            id: "1",
            username: "AceLin",
            password: "A123456",
            email: "xoxosos666@gmail.com",
            name: "AceLin",
          },
          {
            id: "2",
            username: "jane_smith",
            password: "S3cur3P@ss",
            email: "jane.smith@example.com",
            name: "TestUser",
          },
        ]
        const user = users.find(
          (u) => u.email === credentials.email && u.password === credentials.password,
        )
        return user ? { id: user.id, name: user.name, email: user.email } : null
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account, profile, user }) {
      console.log(token, account, profile, user)

      if (account && account.type === "credentials") {
        console.log(token, account, profile)
        token.userId = account.providerAccountId
      }
      return token
    },
    async session({ session, token, user }) {
      if (session?.user) {
        // @ts-ignore
        session.user.id = token.userId
      }
      return session
    },
  },
}
export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)
