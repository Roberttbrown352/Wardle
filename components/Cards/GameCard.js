import { Card, CardHeader, CardContent, Typography, Divider, Box, Grid} from "@mui/material"

export default function GameCard(game){
  const {opp, status} = game

  return(
    <Card sx={{ maxWidth: 400, minWidth: 350 }}>
      <CardHeader title={`You VS ${opp}`} style={{ textAlign: 'center' }}/>
      <Divider />
      <CardContent>
        <Grid container spacing={2}>

          <Grid item xs={6}>
            <Box textAlign='center'>
              <Typography>{`Status`}</Typography>
                <Divider />
              <Typography>{status}</Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box textAlign='center'>
              <Typography>Placeholder</Typography>
            </Box>
          </Grid>

        </Grid>
      </CardContent>
    </Card>
  )
}
