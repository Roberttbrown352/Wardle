export default async function submitBoard(user, game){
  const body = {user, game}
  const response = await fetch('/api/daily', {
    method: 'PUT',
    body: JSON.stringify(body)
  })

  if (!response.ok){
    throw new Error(response.statusText)
  }
}
