import { useState } from 'react';
import { Container, Box, Typography, Avatar, TextField, Button, Link } from '@mui/material';
import { LoginContainer, LoginIcon, LoginEmail, LoginPassword, LoginSubmit, SignUp } from '../components/MUI-Props/Login';
import { LockOutlined } from '@mui/icons-material';

export default function Login() {

	return (
		<Container>
			<Box {...LoginContainer}>
				<Avatar {...LoginIcon}>
          <LockOutlined />
        </Avatar>
				<Typography variant='h4'>Log In</Typography>

				<Box component="form" noValidate sx={{ mt: 1 }}>
					<TextField {...LoginEmail}/>
					<TextField {...LoginPassword}/>
					<Button {...LoginSubmit}>Sign In</Button>
          <Link {...SignUp}>{`Don't have an account? Sign Up`}</Link>
				</Box>
			</Box>
		</Container>
	);

}
