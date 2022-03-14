import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function submitDailyGame(body){

  const { user, game } = body
  const words = game.gameBoard.map((board) => {
    return board.word.join('').toLowerCase()
  })
  const turn = game.turn + 1

  const updateGame = await prisma.daily.update({
    where: {
      userId: user.email
    },
    data: {
      turn,
      words
    }
  })

  return updateGame
}
