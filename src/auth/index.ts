
import NextAuth, { NextAuthConfig, User } from "next-auth"
import Credentials from "next-auth/providers/credentials"

// export const BASE_PATH = "api/auth"
const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text", placeholder: "AceLin" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        const users = [
          {
            id: "1",
            username: "john_doe",
            password: "P@ssw0rd123",
            email: "john.doe@example.com",
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
          (u) => u.username === credentials.username && u.password === credentials.password,
        )
        return user ? { id: user.id, name: user.name, email: user.email } : null
      },
    }),
  ],
  // basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
}
export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)
