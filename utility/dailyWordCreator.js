import seedrandom from 'seedrandom'

export default function generateDailyWord(count){
  const d = new Date ()

  const day = d.getDate()
  const month = d.getMonth()
  const year = d.getFullYear()

  const rng = seedrandom(day + month + year)

  return Math.floor(rng() * count)
}
