import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function submitDailyGame(body){
  const { user, game } = body

  const words = game.words.map((word) => {
    return word.join('').toLowerCase()
  })

  const colors = game.colors.map((color) => {
    return color.join('')
  })

  const turn = game.turn + 1

  const updatedGame = await prisma.daily.update({
    where: {
      email: user.email
    },
    data: {
      turn,
      words,
      colors,
      status: game.status
    }
  })

  return updatedGame
}
