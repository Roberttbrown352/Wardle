import { Container, Grid, Stack, Box } from "@mui/material"
import Banner from "../../components/Banner"
import letterCard from "../../components/Cards/LetterCard"

const rows = [['1','2','3','4','5'],['a','s','d','f','g'],['','','','',''],['','','','',''],['','','','',''],['','','','','']]

const keyboard = [
  ['Q','W','E','R','T','Y','U','I','O','P'],
  ['A','S','D','F','G','H','J','K','L'],
  ['^','Z','X','C','V','B','N','M','<-']
]

const oppStatus = [[''],[''],[''],[''],[''],['']]

export default function Game(){

  const renderGameRow = (row, rowIndex, board) => {
      return (<Stack direction='row' justifyContent="center" spacing={0.5} key={`${board}-${row}${rowIndex}`}>{row.map((letter, index) => letterCard(letter, index, rowIndex, board))}</Stack>)
  }

  const renderBoard = (rows, board) => {
    return rows.map((row, index) => renderGameRow(row, index, board))
  }

  return(
    <Container>
      <Box display='flex' justifyContent='center'>
        <Grid container spacing={3} sx={{mt: 2, width: 600}}>
          <Grid item xs={9}>
            <Stack spacing={0.5}>
              {renderBoard(rows, 'main')}
            </Stack>
          </Grid>

          <Grid item xs={3}>
            <Stack spacing={0.5}>
              {renderBoard(oppStatus, 'opp')}
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{mt: 2}}>
        <Stack spacing={0.5}>
          {renderBoard(keyboard, 'keyboard')}
        </Stack>
      </Box>
    </Container>
  )
}
