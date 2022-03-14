import Loading from '../components/Loading'
import { useUser } from '@auth0/nextjs-auth0'

export default function Index() {
  const {user, error, isLoading } = useUser()

  if (isLoading) return (<Loading />)
  if (error) return <div>{error.message}</div>

  return (
    (
      <>
        <h1>Test</h1>
      </>
    )
  )
}
