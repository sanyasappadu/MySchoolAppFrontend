import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://myschoolappbackend.onrender.com/api/blogs"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data.data.blogs);
        setBlogs(data.data.blogs); // Assigning fetched data to the blogs variable
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Typography sx={{ marginLeft: 95, padding: 5 }}>Blog Posts</Typography>
      {blogs.map((blog) => (
        <Card
          sx={{ maxWidth: 600, marginLeft: 70, marginTop: 2 }}
          key={blog.id}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={blog.referenceLink}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {blog.heading}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {blog.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">{blog.name}</Button>
            <Button size="small">{blog.idnumber}</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
