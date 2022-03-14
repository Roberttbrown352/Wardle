import generateDailyWord from '../../utility/dailyWordCreator'
import words from "../../utility/wordBank"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function findOrCreate(user) {

  const { email } = user

  const daily = await prisma.daily.findMany({
    where: {
      userId: email
    }
  })

  if(daily.length){
    return daily[0]
  } else {
    const newDaily = await prisma.daily.create({
      data: {
        userId: email,
        currentWord: words[generateDailyWord(words.length)],
        words: ['','','','','',''],
      }
    })
    return newDaily
  }
}
