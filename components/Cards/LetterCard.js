import { Card, Typography } from "@mui/material"
import { card } from '../MUI-Props/LetterCard'

export default function letterCard(letter, index, row, board){

  board = board ? board : ''

  return(
    <Card key={`${board}-${row}-${index}${letter}`} {...card}>
      <Typography variant="h6">
        {letter}
      </Typography>
    </Card>
  )
}
