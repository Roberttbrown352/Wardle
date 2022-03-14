export default async function grabBoard(user){
  const response = await fetch('/api/daily', {
    method: 'POST',
    body: JSON.stringify(user)
  })

  if (!response.ok){
    throw new Error(response.statusText)
  }

  const data = await response.json()

  data.colors = data.colors.map((string) => {
    if(string === ''){
      return ['','','','','']
    } else {
      return string.split('')
    }
  })

  data.words = data.words.map((string) => {
    string = string.toUpperCase()
    if(string === ''){
      return ['','','','','']
    } else {
      return string.split('')
    }
  })

  return {...data, loaded: true, letterIndex: 0}
}
