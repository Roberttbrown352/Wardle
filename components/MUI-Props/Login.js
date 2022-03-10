export const LoginContainer = {sx:{ marginTop: 8, display: 'flex',
  flexDirection: 'column', alignItems: 'center'}}

export const LoginIcon = {sx:{ m: 1, bgcolor: 'secondary.main' }}

export const LoginEmail = {id:"email", label:"Email", name:'email',
  variant:"filled", margin:"normal", fullWidth: true, required: true,
  autoComplete:'email', autoFocus: true }

export const LoginPassword = {id:"password", label:"Password", name:'password',
  variant:"filled", margin:"normal", fullWidth: true, required: true,
  autoComplete:"current-password", type:"password" }

export const LoginSubmit = {type:"submit", fullWidth: true, variant:"contained",
  sx:{ mt: 3, mb: 2 }}

export const SignUp = {underline:'hover', href:'#'}
