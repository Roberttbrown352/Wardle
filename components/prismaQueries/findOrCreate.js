import generateDailyWord from '../../utility/dailyWordCreator'
import words from "../../utility/wordBank"
// import { PrismaClient } from "@prisma/client"
// const prisma = new PrismaClient()
import { prisma } from '../../db'

export default async function findOrCreate(email) {
  const currentWord =  words[generateDailyWord(words.length)]

  let daily = await prisma.daily.findMany({
    where: {
      email
    }
  })

  if(daily.length){
    if(daily[0].currentWord !== currentWord){
      daily = await prisma.daily.update({
        where: {
          email: email
        },
        data: {
          turn: 0,
          words: ['','','','','',''],
          colors: ['','','','','',''],
          correctLetters: '',
          incorrectLetters: '',
          closeLetter: '',
          currentWord
        }
      })
    } else {
      daily = daily[0]
    }
  } else {
    daily = await prisma.daily.create({
      data: {
        email,
        currentWord,
        words: ['','','','','',''],
        colors: ['','','','','','']
      }
    })
  }
  return daily
}
