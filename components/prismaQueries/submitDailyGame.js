// import { PrismaClient } from "@prisma/client"
// const prisma = new PrismaClient()

import { prisma } from "../../db"

export default async function submitDailyGame(body){
  const { user, game } = body

  const words = game.words.map((word) => {
    return word.join('').toLowerCase()
  })

  const colors = game.colors.map((color) => {
    return color.join('')
  })

  const turn = game.turn + 1

  const data = {
    turn,
    words,
    colors,
    status: game.status,
    correctLetters: game.correctLetters,
    closeLetters: game.closeLetters,
    incorrectLetters: game.incorrectLetters
  }

  const updatedGame = await prisma.daily.update({
    where: {
      email: user.email
    },
    data
  })

  if(game.status === 'won'){
    data.wins = updatedGame.wins + 1
    await prisma.daily.update({
      where: {
        email: user.email
      },
      data
    })
  } else if(game.status === 'lost'){
    data.losses = updatedGame.losses + 1
    await prisma.daily.update({
      where: {
        email: user.email
      },
      data
    })
  }

  return updatedGame
}
