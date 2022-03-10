import { Container, Grid, Stack, Box } from "@mui/material"
import Banner from "../../components/Banner"
import letterCard from "../../components/Cards/LetterCard"

const rows = [['1','2','3','4','5','6'],['a','s','d','f','g','h'],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','','']]

const oppStatus = [[''],[''],[''],[''],[''],['']]

export default function Game(){

  const renderGameRow = (row, rowIndex, board) => {
      return (<Stack direction='row' justifyContent="center" key={`${board}-${row}${rowIndex}`}>{row.map((letter, index) => letterCard(letter, index, rowIndex, board))}</Stack>)
  }

  const renderBoard = (rows, board) => {
    return rows.map((row, index) => renderGameRow(row, index, board))
  }

  return(
    <Container>
      <Banner />
      <Grid container spacing={2} sx={{mt: 2}}>
        <Grid item xs={9}>
          <Stack>
            {renderBoard(rows, 'main')}
          </Stack>
        </Grid>

        <Grid item xs={3}>
          <Stack>
            {renderBoard(oppStatus, 'opp')}
          </Stack>
        </Grid>

      </Grid>
    </Container>
  )
}
