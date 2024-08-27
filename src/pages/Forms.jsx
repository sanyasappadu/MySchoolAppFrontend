import React, { useState, useEffect } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ListItemButton from '@mui/material/ListItemButton';

function Forms() {
  const [form, setForm] = useState("Leave Letter");
  const [data, setData] = useState([]);

  useEffect(() => {
    let endpoint;
    switch (form) {
      case "Leave Letter":
        endpoint = "https://myschoolappbackend.onrender.com/api/leave";
        break;
      case "Complaint Letters":
        endpoint = "https://myschoolappbackend.onrender.com/api/complaints";
        break;
      case "School Games":
        endpoint = "https://myschoolappbackend.onrender.com/api/games";
        break;
      case "Admission Forms":
        endpoint = "https://myschoolappbackend.onrender.com/api/admission";
        break;
      default:
        endpoint = "https://myschoolappbackend.onrender.com/api/leave";
    }

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [form]);

  return (
    <div style={{ display: "flex" }}>
      <Box sx={{ m: 10, width: "15%" }}>
        <List>
          <ListItemButton
            key={"leave-letters"}
            disablePadding
            sx={{ my: 3, borderRadius: "16px", border: 1, height: "5rem" }}
            onClick={() => setForm("Leave Letter")}
          >
            <Typography variant="h6" sx={{ ml: 3 }}>Leave Letters</Typography>
          </ListItemButton>
          <ListItemButton
            key={"complaint-letters"}
            disablePadding
            sx={{ my: 3, borderRadius: "16px", border: 1, height: "5rem" }}
            onClick={() => setForm("Complaint Letters")}
          >
            <Typography variant="h6" sx={{ ml: 3 }}>Complaint Letters</Typography>
          </ListItemButton>
          <ListItemButton
            key={"school-games"}
            disablePadding
            sx={{ my: 3, borderRadius: "16px", border: 1, height: "5rem" }}
            onClick={() => setForm("School Games")}
          >
            <Typography variant="h6" sx={{ ml: 3 }}>School Games</Typography>
          </ListItemButton>
          <ListItemButton
            key={"admission-forms"}
            disablePadding
            sx={{ my: 3, borderRadius: "16px", border: 1, height: "5rem" }}
            onClick={() => setForm("Admission Forms")}
          >
            <Typography variant="h6" sx={{ ml: 3 }}>Admission Forms</Typography>
          </ListItemButton>
        </List>
      </Box>
      <Box sx={{ flexGrow: 1, width: "85%", mt: 5 }}>
        <Grid
          container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data.map((item, index) => (
            <Card key={index} sx={{ minWidth: 275, m: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {form}
                </Typography>
                <Typography variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {item.identifier}
                </Typography>
                {/* <Typography variant="body2">
                  {item.description}
                </Typography> */}
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Forms;
