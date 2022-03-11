import { useState } from "react";
import { Tooltip, IconButton, Avatar, Menu, MenuItem, Typography } from "@mui/material";
import { AvatarMenu } from "./MUI-Props/NavAvatar";
import { useRouter } from "next/router";
import { useUser } from '@auth0/nextjs-auth0'

export default function NavAvatar(){
  const {user, error, isLoading } = useUser()
  const [anchor, setAnchor] = useState(null);
  const loggedInOptions = [{name:'Logout', path:'/api/auth/logout'}]
  const loggedOutOptions = [{name:'Login', path:'/api/auth/login'}]

  const router = useRouter()

  const handleOpenUserMenu = (event) => {
    setAnchor(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setAnchor(null)
  }
  const handleRoute = (path) => {
    router.push(path)
  }

  const singleOption = (option) => {
    return (
      <MenuItem key={option.name} onClick={() => {handleRoute(option.path)}}>
        <Typography textAlign="center">{option.name}</Typography>
      </MenuItem>
    )
  }

  const menuRender = () => {
    if(user){
      return loggedInOptions.map(singleOption)
    } else if(error || isLoading){
      return (<></>)
    } else {
      return loggedOutOptions.map(singleOption)
    }
  }

  return(
    <>
      <Tooltip title="Open">
        <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
          <Avatar alt="Remy Sharp" src="" />
        </IconButton>
      </Tooltip>
      <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={handleCloseUserMenu} {...AvatarMenu}>
        {menuRender()}
      </Menu>
    </>
  )
}
