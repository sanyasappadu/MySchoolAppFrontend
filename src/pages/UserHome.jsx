

import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import "./userhome.css";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import FactCheckTwoToneIcon from '@mui/icons-material/FactCheckTwoTone';
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
const UserHome = () => {
  const { userEmail } = useParams();

  // console.log(userEmail);
  const subjects = [
    { name: <h3>Subject</h3>, marks: <h3>Marks</h3> },
    { name: "Telugu", marks: 20 },
    { name: "Hindi", marks: 20 },
    { name: "English", marks: 20 },
    { name: "Maths", marks: 20 },
    { name: "Science", marks: 20 },
    { name: "Social", marks: 20 },
  ];
  const roles = {
    hm : ["profileDetails", "createTeacher", "createStudent", "createBlogs", "createMarkSheet"],
    vhm : ["profileDetails", "createTeacher", "createStudent", "createBlogs", "createMarkSheet"],
    teacherAdmin : ["profileDetails", "createTeacher", "createStudent", "createBlogs", "createMarkSheet"],
    teacher : ["profileDetails", "createBlogs", "createMarkSheet"],
    classLeader : ["profileDetails", "createBlogs", "createMarkSheet"],
    studentAdmin : ["profileDetails", "createBlogs", "createMarkSheet"],
    student : ["profileDetails"],
  }
  const [name, setName] = useState(null);
  const [userRole, setUserRole] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [name1, setName1] = useState("profileDetails");
  // Function to fetch data from the API
  const API_CREATEBLOG = 'https://myschoolappbackend.onrender.com/api/blog';

  const handleBlogSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userData = {
      "name": formData.get('name'),
      "role": formData.get('role'),
      "idnumber": formData.get('idnumber'),
      "heading": formData.get('heading'),
      "relatedLinks": formData.get('relatedLinks'),
      "description": formData.get('description'),
      "briefDescription": formData.get('briefDescription'),
    };
    console.log(userData)
    try {
      const response = await fetch(API_CREATEBLOG, {
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
  const [selectedBlog, setSelectedBlog] = useState();

  const handleBlogClick = async (blogId) => {
    try {
      const response = await fetch(`https://myschoolappbackend.onrender.com/api/blog/${blogId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch blog');
      }
      const blogData = await response.json();
      console.log(blogData.data.blog)
      setSelectedBlog(blogData.data.blog); // Store the retrieved blog data in state
      setName1("blog")
    } catch (error) {
      console.error('Error fetching blog:', error);
    }
  };
  const API_CREATESTUDENT = 'https://myschoolappbackend.onrender.com/api/register';

  const handleCreateUser = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userData = {
      "name": formData.get('name'),
      "role": formData.get('role'),
      "email": formData.get('email'),
      "password": formData.get('password'),
      "class": formData.get('class'),
      "role": formData.get('role'),
      "qualification": formData.get('qualification'),
      "experience": formData.get('experience'),
      "yearOfJoin": formData.get('yearOfJoin'),
      "salaryDetails": formData.get('salaryDetails'),
    };
    console.log(userData)
    try {
      const response = await fetch(API_CREATESTUDENT, {
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
  const fetchData = async () => {
    try {
      const response = await fetch(`https://myschoolappbackend.onrender.com/api/getUser/${userEmail}`);
      const jsonData = await response.json();
      setUserRole(roles[jsonData.user.role])
      console.log(jsonData.user.role);
      setName(jsonData.user.name);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    const fetchBlogsData = async () => {
      try {
        const response = await fetch('https://myschoolappbackend.onrender.com/api/blogs');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data.data.blogs)
        setBlogs(data.data.blogs); // Assigning fetched data to the blogs variable
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBlogsData();
    fetchData();
  }, []); 
  const handleListItemClick = (text) => {
    setName1(text); // Set name1 state to the corresponding role based on the text
    console.log(text)
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {/* <div className="sidebar">{renderFeatures()}</div> */}
      <div className="sidebar">
        <Box sx={{ display: "flex", m: 2 }}>
          {" "}
          <List>
            {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
            <ListItem disablePadding sx={{ m: 2 }}>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"
                    // sx={{ width: 56, height: 56, ml:10, mb:2 }}
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
            {userRole.map((text, index) => (
              <ListItem key={text} disablePadding value={index}>
                <ListItemButton onClick={() => handleListItemClick(text)}>
                  <ListItemIcon>
                    {text === "profileDetails" && <AccountCircleTwoToneIcon />}
                    {text === "createTeacher" && <ManageAccountsTwoToneIcon />}
                    {text === "createStudent" && <ManageAccountsTwoToneIcon />}
                    {text === "createBlogs" && <FactCheckTwoToneIcon />}
                    {text === "createMarkSheet" && <FactCheckTwoToneIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </div>
      {name1 === "profileDetails" && (
        <div className="mainsection">
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "20px",
              }}
            >
              <img
                className="profile-img"
                src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"
                alt=""
              />
              <div style={{ marginLeft: "50px" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h3>Name : </h3>
                  <h3 style={{ marginLeft: "10px" }}>Virat Kohli</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h3>Class : </h3>
                  <h3 style={{ marginLeft: "10px" }}>5th</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h3> Section : </h3>
                  <h3 style={{ marginLeft: "10px" }}>A</h3>
                </div>
              </div>
            </div>
            <div>
              <h2>Year Of Studying</h2>
              <p>joined in this school 2018 june 16 and contiuing</p>
            </div>
            <div>
              <h2>Mark sheets</h2>
              <div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h5>ID Number :</h5>
                  <h5>S2017H123</h5>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h5>Name :</h5>
                  <h5>Virat Kohli</h5>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h5>Class : </h5>
                  <h5>5th</h5>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h5>Unit Test :</h5>
                  <h5>1st</h5>
                </div>
              </div>
              <table style={{ width: "100%" }}>
                <thead>
                  <tr>
                    {subjects.map((subject) => (
                      <th key={subject.name} style={{ textAlign: "start" }}>
                        {subject.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {subjects.map((subject) => (
                      <td key={subject.name} style={{ textAlign: "start" }}>
                        {subject.marks}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {name1 === "blog" && (
        <div className="mainsection">
          <h1>BLOG DETAILS</h1>
          {/* Render other blog details as needed */}
          <Card sx={{ maxWidth: 600, marginTop: 2}} key={selectedBlog.id}>
             <CardMedia
               component="img"
               alt="green iguana"
               height="140"
               image={selectedBlog.referenceLink}
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="div">{selectedBlog.heading}</Typography>
               <Typography variant="body2" color="text.secondary">{selectedBlog.description}</Typography>
             </CardContent>
             <CardActions>
               <Button size="small">{selectedBlog.name}</Button>
               <Button size="small">{selectedBlog.idnumber}</Button>
             </CardActions>
           </Card>
        </div>
      )}

      {name1 === "createBlogs" && (
        <div className="mainsection">
          <h1>Create blogs</h1>
          <Box
            component="form"
            noValidate
            onSubmit={handleBlogSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="idnumber"
                  required
                  fullWidth
                  id="idnumber"
                  label="ID NUMBER"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="NAME"
                  name="name"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="heading"
                  label="HEADING"
                  type="heading"
                  id="heading"
                  autoComplete="new-heading"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="relatedLinks"
                  label="RELATED LINKS"
                  type="relatedLinks"
                  id="relatedLinks"
                  autoComplete="new-relatedLinks"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="role"
                  label="ROLE"
                  type="role"
                  id="role"
                  autoComplete="new-role"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={4}
                  name="description"
                  label="DESCRIPTION"
                  type="description"
                  id="description"
                  autoComplete="new-description"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  multiline
                  rows={6}
                  name="briefDescription"
                  label="BRIEF DESCRIPTION"
                  type="briefDescription"
                  id="briefDescription"
                  autoComplete="new-briefDescription"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SAVE BLOG
            </Button>
          </Box>
        </div>
      )}
      {name1 === "createMarkSheet" && (
        <div className="mainsection">
          <h1>Announce The Exam Marks</h1>
          {/* <TableComponent /> */}
        </div>
      )}
      {name1 === "createStudent" && (
        <div className="mainsection">
          <h1>Create New User Account</h1>
          <Box
            component="form"
            noValidate
            onSubmit={handleCreateUser}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="NAME"
                  name="name"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="email"
                  type="email"
                  id="email"
                  autoComplete="new-email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="gender"
                  label="gender"
                  type="gender"
                  id="gender"
                  autoComplete="new-gender"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="role"
                  label="ROLE"
                  type="role"
                  id="role"
                  autoComplete="new-role"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="class"
                  label="class"
                  type="class"
                  id="class"
                  autoComplete="new-class"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="qualification"
                  label="qualification"
                  type="qualification"
                  id="qualification"
                  autoComplete="new-qualification"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="subjects"
                  label="subjects"
                  type="subjects"
                  id="subjects"
                  autoComplete="new-subjects"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="experience"
                  label="experience"
                  type="experience"
                  id="experience"
                  autoComplete="new-experience"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="yearOfJoin"
                  label="yearOfJoin"
                  type="yearOfJoin"
                  id="yearOfJoin"
                  autoComplete="new-yearOfJoin"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="salaryDetails"
                  label="salaryDetails"
                  type="salaryDetails"
                  id="salaryDetails"
                  autoComplete="new-salaryDetails"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SAVE STUDENT
            </Button>
          </Box>
        </div>
      )}
      {name1 === "createTeacher" && (
        <div className="mainsection">
          <h1>Create New Teacher Account</h1>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-password-input"
                  label="Name"
                  type="name"
                />
                <TextField
                  id="outlined-password-input"
                  select
                  label="Gender"
                  type="gender"
                >
                  {[
                    { value: "Male" },
                    { value: "Female" },
                    { value: "Others" },
                  ].map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="outlined-password-input"
                  select
                  label="Designation"
                  type="role"
                >
                  {[
                    { value: "hm" },
                    { value: "vhm" },
                    { value: "teachetAdmin" },
                    { value: "teachet" },
                  ].map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="outlined-password-input"
                  label="Email"
                  type="email"
                />
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
                <TextField
                  id="outlined-password-input"
                  label="Phone Number"
                  type="phonenumber"
                />
                <TextField
                  id="outlined-password-input"
                  select
                  label="Qualification"
                  type="qualification"
                >
                  {[
                    { value: "bTech" },
                    { value: "Mtech" },
                    { value: "B.Ed" },
                    { value: "M.Ed" },
                  ].map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="outlined-password-input"
                  label="Experience"
                  type="experience"
                />
                <Button
                  variant="contained"
                  sx={{ marginTop: 2, marginLeft: 10 }}
                >
                  Save
                </Button>
              </Box>
            </div>
          </Box>
        </div>
      )}


      <div className="blogsection">
        {blogs.map((blog) => (
          <ListItem alignItems="flex-start"
          key={blog._id}
          // onClick={() => handleBlogClick()}
          onClick={() => handleBlogClick(blog._id)}
          >
            <ListItemText
              primary={blog.heading}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {blog.name}
                  </Typography>
                  {blog.description}
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </div>
    </div>
  );
};

export default UserHome;

