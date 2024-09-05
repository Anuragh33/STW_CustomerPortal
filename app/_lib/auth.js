import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import { createGuest, getGuest } from './data-service'

const authConfig = {
  providers: [
    Google({
      cliendId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user
    },
    async signIn({ user, account, profile }) {
      try {
        const existingUser = await getGuest(user.email)

        !existingUser
          ? await createGuest({ email: user.email, fullName: user.name })
          : null

        return true
      } catch {
        return false
      }
    },
    async session({ session, user }) {
      const guest = await getGuest(session.user.email)

      session.user.id = guest.id
      return session
    },
  },
  pages: {
    signIn: '/login',
  },
}

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig)
