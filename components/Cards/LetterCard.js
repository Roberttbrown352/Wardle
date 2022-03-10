import { Card, CardContent, Typography } from "@mui/material"

export default function letterCard(letter, index, row, board){

  board = board ? board : ''

  return(
    <Card variant="outlined" key={`${board}-${row}-${index}${letter}`} sx={{width: 75, height: 75}} style={{ textAlign: 'center' }}>
      <CardContent>
        <Typography variant="h3">
          {letter}
        </Typography>
      </CardContent>
    </Card>
  )
}
