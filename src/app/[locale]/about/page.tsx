import {auth} from '@/auth'
export default async function About() {
  const user  =await auth()
  return <pre>{JSON.stringify(user)}</pre>
}
