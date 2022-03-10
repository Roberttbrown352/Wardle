import { useState } from "react";
import { useRouter } from "next/router";
import { Tabs, Tab, Box, AppBar, Container, Toolbar, Grid } from "@mui/material";
import Banner from "./Banner";
import NavAvatar from "./NavAvatar";

export default function NavBar() {
  const [value, setValue] = useState(0);

  const router = useRouter()

  const handleChange = (event, newValue) => {
    router.push(`/${event.target.id}`)
    setValue(newValue);
  };

  return(
    <AppBar position="relative">
      <Container maxWidth='xl'>
        <Toolbar>
          <Grid container>
            <Grid item xs={4} align='left'>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Login" id='login'/>
                <Tab label="New Game" id=''/>
                <Tab label="Games" id='games'/>
                <Tab label="Game Test" id='game/123'/>
              </Tabs>
            </Grid>

            <Grid item xs={4}>
              <Banner />
            </Grid>

            <Grid item container xs={4} display="flex" justifyContent="right">
              <NavAvatar />
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
