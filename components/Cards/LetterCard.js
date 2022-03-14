import { Card, CardActionArea, Typography, Paper } from "@mui/material"
import { card, correctCard, incorrectCard, closeCard } from '../MUI-Props/LetterCard'

export default function letterCard(letter, index, row, board, kb=false, color, game){
  let prop = {}

  board = board ? board : ''


  if(kb){
    if(game.correctLetters.includes(letter)) {
      prop = {...correctCard}
    } else if (game.closeLetters.includes(letter)) {
      prop = closeCard
    } else if (game.incorrectLetters.includes(letter)) {
      prop = incorrectCard
    } else {
      prop = card
    }
  } else {
    if(color === 'G'){
      prop = {...correctCard}
    } else if (color === 'Y'){
      prop = closeCard
    } else if (color === 'D'){
      prop = incorrectCard
    } else {
      prop = card
    }
  }

  if(kb){
    return(
      <Card key={`${board}-${row}-${index}${letter}`} {...card}>
        <CardActionArea>
          <Typography variant="h6">
            {letter}
          </Typography>
        </CardActionArea>
      </Card>
    )
  }

  return(
    <Card key={`${board}-${row}-${index}${letter}`} {...prop}>
      <Typography variant="h6">
        {letter}
      </Typography>
    </Card>
  )
}
