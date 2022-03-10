import { Tooltip, IconButton, Avatar, Menu, Box } from "@mui/material";

export default function NavAvatar(){

  return(
    <Tooltip title="Open settings">
      <IconButton sx={{ p: 0 }}>
        <Avatar alt="Remy Sharp" src="" />
      </IconButton>
    </Tooltip>
  )
}
