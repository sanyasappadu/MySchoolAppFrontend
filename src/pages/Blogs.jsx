import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://myschoolappbackend.onrender.com/api/blogs');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)
        setBlogs(data); // Assigning fetched data to the blogs variable
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
console.log(blogs.data)
  return (
    <div>
            <h1>Blog Posts</h1>
            {/* {blogs.data.map(blog => (
          <li key={blog.id}>
            <h2>{blog.name}</h2>
            <p>{blog.idnumber}</p>
          </li> */}
        //   <Card sx={{ maxWidth: 600, marginLeft: 70 , marginTop: 2}} >
        //   <CardMedia
        //     component="img"
        //     alt="green iguana"
        //     height="140"
        //     image={blog.referenceLink}
        //   />
        //   <CardContent>
        //     <Typography gutterBottom variant="h5" component="div">
        //       Lizard
        //     </Typography>
        //     <Typography variant="body2" color="text.secondary">
        //       Lizards are a widespread group of squamate reptiles, with over 6,000
        //       species, ranging across all continents except Antarctica
        //     </Typography>
        //   </CardContent>
        //   <CardActions>
        //     <Button size="small">{blog.name}</Button>
        //     <Button size="small">{blog.idnumber}</Button>
        //   </CardActions>
        // </Card>
        // ))}
         
    {/* <Card sx={{ maxWidth: 600, marginLeft: 70 , marginTop: 2}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://static-prod-web.miniclip.com/assets/games/26-Subway_Surfers/02_PageThumbnail/M-Game_PageThumbnail.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 600, marginLeft: 70 , marginTop: 2}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://static-prod-web.miniclip.com/assets/games/26-Subway_Surfers/02_PageThumbnail/M-Game_PageThumbnail.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 600, marginLeft: 70 , marginTop: 2}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://static-prod-web.miniclip.com/assets/games/26-Subway_Surfers/02_PageThumbnail/M-Game_PageThumbnail.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> */}
    </div>
  );
}
