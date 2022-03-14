import { Container, Grid, Stack, Box, Card, CardActionArea, Typography } from "@mui/material"
import letterCard from "../components/Cards/LetterCard"
import { useUser } from '@auth0/nextjs-auth0'
import { useState } from "react"
import { card, correctCard, incorrectCard, closeCard } from '../components/MUI-Props/LetterCard'
import emptyDaily from '../components/emptyDaily'
import grabBoard from '../components/apiQueries/grabDailyBoard'
import submitBoard from '../components/apiQueries/submitDailyBoard'
import checkValid from '../utility/checkValidWord'

const keyboard = [
  ['Q','W','E','R','T','Y','U','I','O','P'],
  ['A','S','D','F','G','H','J','K','L'],
  ['^','Z','X','C','V','B','N','M','<-']
]



export default function Daily(){
  const { user } = useUser()
  const [game, setGame] = useState(emptyDaily)

  const getCurrent = async () => {
    if(user && !game.loaded){
      const currentGame = await grabBoard(user)
      setGame({...currentGame, loaded: true, letterIndex: 0})
    }
  }

  const keyboardCard = (letter, index, row, board) => {

    let prop = {}

    const handleClick = (event) => {
      let input = event.target.innerText
      const oldRow = [...game.words]

      if(game.status !== 'won'){
        if(input === '<-' && game.letterIndex != 0 && game.turn < 6){
          oldRow[game.turn][game.letterIndex - 1] = ''
          setGame({...game, words: oldRow, letterIndex: game.letterIndex - 1})
        } else if(input === '^' && game.letterIndex === 5 && game.turn != 6){
          if(!checkValid(game.words[game.turn].join('').toLowerCase())){
            console.log('incorrect word')
          } else if(user){
            setGame({...game, turn: game.turn + 1, letterIndex: 0})
            handleSubmit()
          }
        } else if(game.letterIndex < 5 && input !== '<-' && input !== '^' && game.turn < 6){
          oldRow[game.turn][game.letterIndex] = input
          setGame({...game, words: oldRow, letterIndex: game.letterIndex + 1})
        }
      }
    }

    if(letter){
      if(game.correctLetters.includes(letter)) {
        prop = {...correctCard}
      } else if (game.closeLetters.includes(letter)) {
        prop = closeCard
      } else if (game.incorrectLetters.includes(letter)) {
        prop = incorrectCard
      } else {
        prop = card
      }
    }

    return(
      <Card key={`${board}-${row}-${index}${letter}`} {...prop}>
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
        const colorRow = game.colors[rowIndex]

        return (<Stack direction='row' justifyContent="center" spacing={0.5} key={`${board}-row${rowIndex}`}>{row.map((letter, index) => letterCard(letter, index, rowIndex, board, kb, colorRow[index]))}</Stack>)
      }
  }

  const renderBoard = (rows, board, kb = false) => {
    return rows.map((row, index) => renderGameRow(row, index, board, kb))
  }

  const handleSubmit = async () => {
    await submitBoard(user, game)
    const currentGame = await grabBoard(user)
    setGame({...currentGame, loaded: true, letterIndex: 0})
  }

  getCurrent()

  return(
    <Container>
      <Box display='flex' justifyContent='center'>
        <Grid container spacing={3} sx={{mt: 2, width: 600}}>
          <Grid item xs={12}>
            <Stack spacing={0.5}>
              {renderBoard(game.words, 'main')}
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
