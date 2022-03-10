import { Stack, Container } from "@mui/material";
import letterCard from "./Cards/LetterCard";

export default function Banner(){
  const banner = 'WARDLE'

  const renderBanner = (banner) => {
    return banner.split('').map((letter, index) => letterCard(letter, index, 'banner'))
  }

  return(
    <Container sx={{mt: 2}}>
      <Stack direction='row' justifyContent="center" alignItems="center">
        {renderBanner(banner)}
      </Stack>
    </Container>
  )

}
