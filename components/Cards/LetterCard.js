import { Card, CardActionArea, Typography } from "@mui/material"
import { card } from '../MUI-Props/LetterCard'

export default function letterCard(letter, index, row, board, kb=false){

  board = board ? board : ''

  const handleClick = (event) => {
    console.log(event.target.innerText)
  }


  if(kb){
    return(
      <Card key={`${board}-${row}-${index}${letter}`} {...card}>
      <CardActionArea onClick={handleClick}>
        <Typography variant="h6">
          {letter}
        </Typography>
      </CardActionArea>
    </Card>
    )
  }

  return(
    <Card key={`${board}-${row}-${index}${letter}`} {...card}>
      <Typography variant="h6">
        {letter}
      </Typography>
    </Card>
  )
}
