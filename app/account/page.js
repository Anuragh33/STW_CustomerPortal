import Link from 'next/link'
import { auth } from '../_lib/auth'

export const metadata = {
  title: 'Login',
}

export default async function AccountPage() {
  const session = await auth()
  console.log(session)

  return (
    <div className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome, {session.user.name.split(' ').at(0)}{' '}
    </div>
  )
}
