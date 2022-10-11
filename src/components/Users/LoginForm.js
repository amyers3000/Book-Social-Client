import { useContext, useEffect, useState } from "react"
import { Grid, Box, Avatar, Button, CssBaseline, TextField, Typography, Container } from '@mui/material'
import { CurrentUser } from "../../context/CurrentUser"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, Link } from 'react-router-dom'
import { logIn } from '../../lib'

function LoginForm() {
    const navigate  = useNavigate()
    const theme = createTheme();
    const { setCurrentUser } = useContext(CurrentUser)
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })
    const [errorMessage, setErrorMessage] = useState(null)

    // useEffect(() => {
    //     if (CurrentUser !== null || CurrentUser !== undefined) {
    //         navigate('/books')
    //     }
    // },[])

    async function handleSubmit(e) {
        e.preventDefault()
        const data = await logIn(credentials)
        if (data.user) {
            setCurrentUser(data.user.firstName)
            localStorage.setItem('token', data.token)
            navigate('/books')
        } else {
            setErrorMessage(data.message)
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    {errorMessage !== null
                        ? (
                            <div className="alert alert-danger" role="alert">
                                {errorMessage}
                            </div>
                        )
                        : null
                    }
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="Username"
                            label="Username"
                            name="Username"
                            value={credentials.username}
                            onChange={e => setCredentials({ ...credentials, username: e.target.value })}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={credentials.password}
                            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link to="/signup">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default LoginForm