import { Container, Grid, Stack, Box, Card, CardActionArea, Typography } from "@mui/material"
import letterCard from "../components/Cards/LetterCard"
import { useUser } from '@auth0/nextjs-auth0'
import { useState } from "react"
import { card } from '../components/MUI-Props/LetterCard'

const gameBoard = [
  {word:['','','','',''], color: ['','','','',''], correct: false},
  {word:['','','','',''], color: ['','','','',''], correct: false},
  {word:['','','','',''], color: ['','','','',''], correct: false},
  {word:['','','','',''], color: ['','','','',''], correct: false},
  {word:['','','','',''], color: ['','','','',''], correct: false},
  {word:['','','','',''], color: ['','','','',''], correct: false}
]
const turn = 0
const letterIndex = 0
const status = 'in progress'
const loaded = false
const keyboard = [
  ['Q','W','E','R','T','Y','U','I','O','P'],
  ['A','S','D','F','G','H','J','K','L'],
  ['^','Z','X','C','V','B','N','M','<-']
]



export default function Daily(){
  const { user } = useUser()
  const [game, setGame] = useState({gameBoard, turn, status, letterIndex, loaded})

  async function grabBoard(){
    const response = await fetch('/api/daily', {
      method: 'POST',
      body: JSON.stringify(user)
    })

    if (!response.ok){
      throw new Error(response.statusText)
    }

    const data = await response.json()
    setGame({...data, loaded: true, letterIndex})
  }

  async function submitBoard(user, game){
    const body = {user, game}
    const response = await fetch('/api/daily', {
      method: 'PUT',
      body: JSON.stringify(body)
    })

    if (!response.ok){
      throw new Error(response.statusText)
    }
  }

  if(user && (!game.loaded)){
    grabBoard()
  }

  const keyboardCard = (letter, index, row, board) => {

    const handleClick = (event) => {
      let input = event.target.innerText

      if(input === '<-' && game.letterIndex != 0 && game.turn < 6){
        const oldRow = [...game.gameBoard]
        oldRow[game.turn].word[game.letterIndex - 1] = ''
        setGame({...game, gameBoard: oldRow, letterIndex: game.letterIndex - 1})

      } else if(input === '^' && game.letterIndex === 5 && game.turn != 6){

        setGame({...game, turn: game.turn + 1, letterIndex: 0})
        handleSubmit()

      } else if(game.letterIndex < 5 && input !== '<-' && input !== '^' && game.turn < 6){

        const oldRow = [...game.gameBoard]
        oldRow[game.turn].word[game.letterIndex] = input
        setGame({...game, gameBoard: oldRow, letterIndex: game.letterIndex + 1})
      }

    }

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

  const renderGameRow = (row, rowIndex, board, kb = false) => {
      if(kb){
        return (<Stack direction='row' justifyContent="center" spacing={0.5} key={`${board}-row${rowIndex}`}>{row.map((letter, index) => keyboardCard(letter, index, rowIndex, board, kb))}</Stack>)
      } else {
        return (<Stack direction='row' justifyContent="center" spacing={0.5} key={`${board}-row${rowIndex}`}>{row.map((letter, index) => letterCard(letter, index, rowIndex, board, kb))}</Stack>)
      }
  }

  const renderBoard = (rows, board, kb = false) => {
    return rows.map((row, index) => renderGameRow(row, index, board, kb))
  }

  const grabWords = (board) => {
    const output = []
    for(let i = 0; i < 6; i++){
      output.push(board[i].word)
    }
    return output
  }

  const handleSubmit = async () => {
    await submitBoard(user, game)
    await grabBoard()
  }

  console.log(game)

  return(
    <Container>
      <Box display='flex' justifyContent='center'>
        <Grid container spacing={3} sx={{mt: 2, width: 600}}>
          <Grid item xs={12}>
            <Stack spacing={0.5}>
              {renderBoard(grabWords(game.gameBoard), 'main')}
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{mt: 2}}>
        <Stack spacing={0.5}>
          {renderBoard(keyboard, 'keyboard', true)}
        </Stack>
      </Box>

      <button onClick={() => {handleSubmit('reach')}}></button>

    </Container>
  )
}
