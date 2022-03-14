import fetchDailyGame from '../../../components/prismaQueries/fetchDailyGame'
import findOrCreate from '../../../components/prismaQueries/findOrCreate'
import submitDailyGame from '../../../components/prismaQueries/submitDailyGame'

export default async function daily(req, res) {

  if(req.method === 'POST'){

    const user = await JSON.parse(req.body)
    const game = await findOrCreate(user)
    const daily = await fetchDailyGame(game)

    res.status(200).json(daily)
  } else if(req.method === 'PUT') {
    const body = await JSON.parse(req.body)
    await submitDailyGame(body)
    res.json('ok')
  }
}
