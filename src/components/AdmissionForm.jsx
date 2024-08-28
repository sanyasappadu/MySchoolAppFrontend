import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const API = "https://myschoolappbackend.onrender.com/api/admission";
// const API = 'http://localhost:4000/api/admission';

const defaultTheme = createTheme();

export default function Form() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userData = {
      "name": formData.get('name'),
      "class": formData.get('class'),
      "oldSchool": formData.get('oldSchool'),
    };
    console.log(userData)
    try {
      const response = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Handle success (e.g., redirect or show success message)
        console.log('Admission saved successfully!');
      } else {
        // Handle error response
        console.error('Admission not saved !:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (<div style={{marginBottom:"280px"}}>
        <ThemeProvider theme={defaultTheme}>
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
          <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <NoteAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Admission Form
          </Typography>
          </Box>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="class"
              label="class"
              type="class"
              id="class"
              autoComplete="current-class"
            />
             <TextField
              margin="normal"
              required
              fullWidth
              name="oldSchool"
              label="Old School"
              type="oldSchool"
              id="oldSchool"
              autoComplete="current-oldSchool"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save Admission
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  </div>

  );
}