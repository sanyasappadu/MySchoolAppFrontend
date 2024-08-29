import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthConext';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const itemData = [
  {
    img: "https://thumbs.dreamstime.com/z/back-to-school-sale-advertising-banner-learn-study-design-template-supplies-vector-illustration-282184334.jpg?w=992",
  },
  {
    img: "https://trbahadurpur.com/wp-content/uploads/2024/01/SCHOOL-BANNER-02-1.jpg",
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
    <div style={{ marginBottom: "50px", display: "flex", flexDirection: "row", width: "100vw", height: ''}}>
      <div style={{ display: "flex", flexWrap: "wrap", width:"100%", justifyContent: 'center', marginTop: '10px', marginLeft: '20px', marginRight: '20px' }}>
        <Card sx={{ width: 320, m: 2 }}>
          <div>
            <Typography level="title-lg">Admission Request Form</Typography>
          </div>
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img
              src="https://trbahadurpur.com/wp-content/uploads/2024/01/SCHOOL-BANNER-02-1.jpg"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <CardContent orientation="horizontal">
            <div>
            <Typography fontSize="lg" fontWeight="lg" sx={{display:"flex", alignItems:"center",justifyContent:"center"}}>
            <Typography sx={{ ml: 1 }}>Fill the form </Typography>
                <ArrowForwardIcon sx={{ ml: 2 }} />
              </Typography>
            </div>
            <Link to="/admissionform" className="link-component">
              <Button
                variant="solid"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
              >
                Click Here
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card sx={{ width: 320, m: 2 }}>
          <div>
            <Typography level="title-lg">Complaint Form</Typography>
          </div>
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img
              src="https://www.wikihow.com/images/thumb/7/78/Ask-a-Teacher-for-Help-Step-13.jpg/-crop-342-184-245px-Ask-a-Teacher-for-Help-Step-13.jpg.webp"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <CardContent orientation="horizontal">
            <div>
              <Typography fontSize="lg" fontWeight="lg" sx={{display:"flex", alignItems:"center",justifyContent:"center"}}>
                <Typography sx={{ mr: 1 }}>Fill the form </Typography>
                <ArrowForwardIcon sx={{ ml: 2}} />
              </Typography>
            </div>
            <Link to="/complaintform" className="link-component">
              <Button
                variant="solid"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
              >
                Click Here
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card sx={{ width: 320, m: 2 }}>
          <div>
            <Typography level="title-lg">Leave Request Form</Typography>
          </div>
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img
              src="https://www.krmangalamgurgaon.com/wp-content/uploads/2024/01/GetAttachmentThumbnail-90-1024x576-1920x1080.webp"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <CardContent orientation="horizontal">
            <div>
            <Typography fontSize="lg" fontWeight="lg" sx={{display:"flex", alignItems:"center",justifyContent:"center"}}>
            <Typography sx={{ ml: 1 }}>Fill the form </Typography>
                <ArrowForwardIcon sx={{ ml: 2 }} />
              </Typography>
            </div>
            <Link to="/leaveform" className="link-component">
              <Button
                variant="solid"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
              >
                Click Here
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card sx={{ width: 320, m: 2 }}>
          <div>
            <Typography level="title-lg">School Games</Typography>
          </div>
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img
              src="https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/e8/b7/t-t-13023-sports-day-display-banner_ver_1.jpg"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <CardContent orientation="horizontal">
            <div>
            <Typography fontSize="lg" fontWeight="lg" sx={{display:"flex", alignItems:"center",justifyContent:"center"}}>
            <Typography sx={{ ml: 1 }}>Fill the form </Typography>
                <ArrowForwardIcon sx={{ ml: 2 }} />
              </Typography>
            </div>
            <Link to="/gamesform" className="link-component">
              <Button
                variant="solid"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
              >
                Click Here
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Home;
