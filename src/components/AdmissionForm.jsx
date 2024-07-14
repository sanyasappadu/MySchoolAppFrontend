import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Form() {
  const API = "https://myschoolappbackend.onrender.com/api/admission";
  const handleBlogSubmit = async (event) => {
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
        console.log('Blog saved successfully!');
      } else {
        // Handle error response
        console.error('Blog not saved !:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  
  return (
    <div>
      <h1 style={{marginLeft:"40%"}}>Admission Form</h1>
      <Box
            component="form"
            noValidate
            onSubmit={handleBlogSubmit}
            sx={{ ml:"25%",  mb:15, borderRadius: "16px", border: 1, width: 1/2 , height:450, }}
            
          >
            <Grid container spacing={3} sx={{flexDirection: 'column', ml:25, mt:4}} >
             
              <Grid item xs={5}>
                <TextField
                  required
                  // sx={{width:"120%"}}
                  fullWidth
                  id="name"
                  label="NAME"
                  name="name"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  autoComplete="given-name"
                  name="class"
                  required
                  fullWidth
                  id="class"
                  label="Class"
                  autoFocus
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  required
                  fullWidth
                  multiline
                  // rows={4}
                  name="oldSchool"
                  label="Old School"
                  type=""
                  id="oldSchool"
                  autoComplete="OldSchool"
                />
              </Grid>
              <Grid item xs={5}>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ my: 1.5 }}
            >
              Save Admission
            </Button>
              </Grid>
            </Grid>
            
          </Box>
    </div>
  )
}

export default Form