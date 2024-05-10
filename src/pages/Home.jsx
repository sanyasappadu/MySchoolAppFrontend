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
    img: "https://png.pngtree.com/thumb_back/fh260/back_pic/05/09/43/985984b912a8c46.jpg",
  },
  {
    img: "https://static.vecteezy.com/system/resources/thumbnails/007/937/497/small/educational-logic-toys-for-montessori-games-creative-banner-landing-page-for-a-website-in-a-flat-style-montessori-school-sensory-education-with-the-help-of-didactic-classes-vector.jpg",
  },
  {
    img: "https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/e8/b7/t-t-13023-sports-day-display-banner_ver_1.jpg",
  },
  {
    img: "https://schools.clipart.com/siteimages/slides/main1-sm.jpg",
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
