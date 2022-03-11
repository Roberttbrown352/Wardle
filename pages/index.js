import Loading from '../components/Loading'
import { useUser } from '@auth0/nextjs-auth0'
import Image from 'next/image'

export default function Index() {
  const {user, error, isLoading } = useUser()

  if (isLoading) return (<Loading />)
  if (error) return <div>{error.message}</div>

  return (
    (
      <>
        {/* <h2>{user.name}</h2>
        <p>{user.email}</p> */}
        <h1>Test</h1>
      </>
    )
  )
}
