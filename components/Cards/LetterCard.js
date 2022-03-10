import { Card, CardContent, Typography } from "@mui/material"

export default function letterCard(letter, index, row, board){

  board = board ? board : ''

  return(
    <Card variant="outlined" key={`${board}-${row}-${index}${letter}`} sx={{width: 50, height: 50}} style={{ textAlign: 'center' }}>
      <CardContent>
        <Typography variant="h6">
          {letter}
        </Typography>
      </CardContent>
    </Card>
  )
}
