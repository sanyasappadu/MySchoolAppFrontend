import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ImageListItem from "@mui/material/ImageListItem";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const itemData = [
  {
    img: "https://avk.edu.in/wp-content/uploads/2023/06/OPEN-FOR-2023-24-1.png",
  },
  {
    img: "https://avk.edu.in/wp-content/uploads/2023/06/OPEN-FOR-2023-24-1.png",
  },
  {
    img: "https://avk.edu.in/wp-content/uploads/2023/06/OPEN-FOR-2023-24-1.png",
  },
  {
    img: "https://avk.edu.in/wp-content/uploads/2023/06/OPEN-FOR-2023-24-1.png",
  },
];

function Home() {
  return (
    <div>
      <Box sx={{ width: "80%" , m:"8%"}}>
        <Grid container rowSpacing={5} columnSpacing={10}>
          {itemData.map((item) => (
            <Grid item xs={6}>
              <Item>
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
