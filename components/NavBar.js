import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

export default function NavBar() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Login" id='login'/>
          <Tab label="New Game" id='newgame'/>
          <Tab label="Games" id='games'/>
        </Tabs>
      </Box>
    </Box>
  )
}
