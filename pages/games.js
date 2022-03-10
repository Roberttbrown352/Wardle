import { Stack, Typography, Container } from "@mui/material"
import GameCard from "../components/Cards/GameCard"


const games = [{opp:'Mike', status:'In Progress', id: 1}, {opp:'Bob', status:'In Progress', id: 2}]

export default function Games() {

  const renderCards = (games) => {
    if(!games.length){
      return <Typography>{`You haven't played any games yet!`}</Typography>
    } else {
      return games.map(game => <GameCard {...game}  key={game.id}/>)
    }
  }

  return(
    <Container sx={{mt: 2}}>
      <Stack spacing={3} direction="column" justifyContent="center" alignItems="center">
        {renderCards(games)}
      </Stack>
    </Container>
  )
}
