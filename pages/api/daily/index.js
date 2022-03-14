import findOrCreate from '../../../components/prismaQueries/findOrCreate'
import submitDailyGame from '../../../components/prismaQueries/submitDailyGame'
import generateDailyWord from '../../../utility/dailyWordCreator';
import wordBank from "../../../utility/wordBank"
import checkWord from '../../../utility/gameLogic';

export default async function daily(req, res) {

  if(req.method === 'POST'){
    const { email } = await JSON.parse(req.body)
    const game = await findOrCreate(email)
    const {colors, turn, words, status} = game

    res.status(200).json({colors, turn, words, status})
  } else if(req.method === 'PUT') {
    const dailyWord = wordBank[generateDailyWord(wordBank.length)].toUpperCase()
    const body = await JSON.parse(req.body)
    const checked = checkWord(body.game.words[body.game.turn], dailyWord)
    let status = ''

    body.game.colors[body.game.turn] = checked.color

    if(body.game.turn === 5 && !checked.correct){
      status = 'lost'
    } else if(checked.correct){
      status = 'won'
    } else if(body.game.status !== 'lost' || body.game.status !== 'won'){
      status = 'in progress'
    }

    body.game.status = status

    await submitDailyGame(body)
    res.json('ok')
  }
}
