import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import api from "../../api/api";
import managerpng from "../../assets/img/Manager.png"
import ls from 'local-storage'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        Bikeez
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Signin() {
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const data = new FormData(event.currentTarget);
    //const data = new FormData();
    data.append('email', data.get('email'));
    data.append('hashed_password', data.get('password'));
    
    console.log(data);

    api.managerLogin(data).then((res) => {
      console.log(res.data)
      if(res.data.status.error_code == 0)
        {
          //this.props.history.push('/admin/dashboard')
          ls.set('token', res.data.response.access_token);
          ls.set('email', 'martin.heidegger@gmail.com');
          ls.set('id', res.data.response.manager_id)
          location.href = '/manager/reports'
          //console.log(ls.get('email'))          
        } 
    });
    
    
    // const data = new FormData(event.currentTarget);
    // // const data = new FormData();
    // // data.append('email', 'manager@bikez.com');
    // // data.append('hashed_password', 'Pass@123');
    
    // //console.log(data);

    // if(data.get('email') == "manager@bikez.com"  && data.get('password') == 'Pass@123')
    // {
    //   //this.props.history.push('/admin/dashboard')
    //   location.href = '/manager'
    // }
    // else
    // {
    //   window.alert("Login Unsuccessful, Try agian!")
    // }
    
    
    // api.login(data).then((res) => {
    //   console.log(res.data)
     
    // });
    
    //location.href = '/manager/dashboard'
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${managerpng})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              
            </Avatar>
            <Typography component="h1" variant="h5">
              Manager Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                required
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                required
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
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
                  <Link href="/operatorsignin" variant="body2">
                    {"Are you a Operator? Login Here"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}