import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import "./userhome.css";
import axios from "axios";
import MarkLists from '../components/MarkLists';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import FactCheckTwoToneIcon from '@mui/icons-material/FactCheckTwoTone';
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import Button from '@mui/material/Button';
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
    "Head Master" : ["Profile Details", "Update Profile", "Create New User", "Create Blogs", "Create Marksheet"],
    "Vice Head Master" : ["Profile Details", "Update Profile", "Create New User", "Create Blogs", "Create Marksheet"],
    "Teacher Admin" : ["Profile Details", "Update Profile", "Create New User", "Create Blogs", "Create Marksheet"],
    "Teacher" : ["Profile Details", "Update Profile", "Create Blogs", "Create Marksheet"],
    "Student Class Leader" : ["Profile Details", "Update Profile", "Create Blogs", "Create Marksheet", "Mark List"],
    "Student Admin" : ["Profile Details", "Update Profile", "Create Blogs", "Create Marksheet", "Mark List"],
    "Student" : ["Profile Details", "Update Profile", "Mark List"],
  }
  const [name, setName] = useState("");
  const [idnumber, setIdNumber] = useState("");
  const [role, setRole] = useState("");
  const [qualification, setQualification] = useState("");
  const [clas, setClas] = useState("");

  const [profileData, setProfileData] = useState({});
  const [userRole, setUserRole] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [name1, setName1] = useState("Profile Details");
  // Function to fetch data from the API
  // const BACKEND = "http://localhost:4000"
  const BACKEND = "https://myschoolappbackend.onrender.com"
  const API_CREATEBLOG = `${BACKEND}/api/blog`;
  
  const [expanded, setExpanded] = React.useState(false);

  const handleChangeBlog = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
      const response = await fetch(`${BACKEND}/api/blog/${blogId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch blog');
      }
      const blogData = await response.json();
      console.log(blogData.data.blog)
      setSelectedBlog(blogData.data.blog); // Store the retrieved blog data in state
    } catch (error) {
      console.error('Error fetching blog:', error);
    }
  };
  const API_CREATESTUDENT = `${BACKEND}/api/register`;

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
    const [formData, setFormData] = useState({
      name: "",
      gender: "",
      role: "",
      password: "",
      phonenumber: "",
      qualification: "",
      experience: "",
      yearOfJoin: "",
      subjects: "",
      class: "",
      img: "",
      isPasswordSet: false,
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.put(
          `${BACKEND}/api/updateUser/${userEmail}`,
          formData
        );
        console.log("User updated successfully", response.data);
        // Handle success, e.g., show a success message
      } catch (error) {
        console.error("An error occurred", error);
        // Handle error, e.g., show an error message
      }
    };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BACKEND}/api/getUser/${userEmail}`);
        const jsonData = await response.json();
        setUserRole(roles[jsonData.user.role])
        // console.log(jsonData);
        setName(jsonData.user.name);
        setIdNumber(jsonData.user.idnumber);
        setRole(jsonData.user.role);
        setQualification(jsonData.user.qualification);
        setClas(jsonData.user.class);

        setProfileData(jsonData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const fetchBlogsData = async () => {
      try {
        const response = await fetch(`${BACKEND}/api/blogs`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlogs(data.data.blogs); // Assigning fetched data to the blogs variable
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    // console.log(profileData)
    fetchBlogsData();
    fetchData();
    // console.log(profileData)
  }, []); 
  const handleListItemClick = (text) => {
    setName1(text); // Set name1 state to the corresponding role based on the text
    console.log(text)
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="sidebar">
        <Box sx={{ ml: 10, mr: 5 }}>
          <List>
            <ListItemButton
              disablePadding
              sx={{ mt: 4, borderRadius: "16px", border: 1, height: "5rem" }}
            >
              <ListItemIcon>
                <Avatar
                  alt="Remy Sharp"
                  src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"
                />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
            {userRole.map((text, index) => (
              <ListItemButton
                key={text}
                disablePadding
                value={index}
                sx={{ my: 3, borderRadius: "16px", border: 1, height: "5rem" }}
                onClick={() => handleListItemClick(text)}
              >
                <ListItemIcon>
                  {text === "Profile Details" && <AccountCircleTwoToneIcon />}
                  {text === "Update Profile" && <ManageAccountsTwoToneIcon />}
                  {text === "Create New User" && <ManageAccountsTwoToneIcon />}
                  {text === "Create Blogs" && <FactCheckTwoToneIcon />}
                  {text === "Create Marksheet" && <FactCheckTwoToneIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </div>

      {name1 === "Profile Details" && (
        <div className="mainsection">
          <h1>Profile Details</h1>
          <Card
            sx={{
              maxWidth: "100%",
              height: "550px",
              marginBottom: 4,
              marginTop: 5,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div style={{ width: "70%", marginLeft: 30, marginTop: 10 }}>
              <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", marginTop: 10 }}>
                  <Typography gutterBottom variant="h4">
                    Name :{" "}
                  </Typography>
                  <Typography gutterBottom variant="h4">
                    {name}
                  </Typography>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                  <Typography variant="h4">Qualification : </Typography>
                  <Typography variant="h4">{qualification || clas}</Typography>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                  <Typography variant="h4">Role : </Typography>
                  <Typography variant="h4">{role}</Typography>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                  <Typography variant="h4">Id Number : </Typography>
                  <Typography variant="h4">{idnumber}</Typography>
                </div>
              </CardContent>
            </div>
            <div style={{ width: "30%" }}>
              <CardMedia
                sx={{
                  height: 200,
                  width: 200,
                  marginRight: 10,
                  marginTop: 5,
                  borderRadius: "16px",
                  border: 1,
                }}
                image="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"
                title="green iguana"
              />
            </div>
          </Card>
        </div>
      )}

      {name1 === "Create Blogs" && (
        <div className="mainsection">
          <h1>Create blogs</h1>
          <Box
            component="form"
            noValidate
            onSubmit={handleBlogSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={5}>
              <Grid item xs={5}>
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
              <Grid item xs={5}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="NAME"
                  name="name"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={5}>
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
              <Grid item xs={5}>
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
              <Grid item xs={5}>
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
             
              <Grid item xs={5}>
                <TextField
                  required
                  fullWidth
                  multiline
                  // rows={4}
                  name="description"
                  label="DESCRIPTION"
                  type="description"
                  id="description"
                  autoComplete="new-description"
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  fullWidth
                  required
                  multiline
                  // rows={6}
                  name="briefDescription"
                  label="BRIEF DESCRIPTION"
                  type="briefDescription"
                  id="briefDescription"
                  autoComplete="new-briefDescription"
                />
              </Grid>
              <Grid item xs={5}>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ my: 1.5 }}
            >
              SAVE BLOG
            </Button>
              </Grid>
            </Grid>
            
          </Box>
        </div>
      )}

      {name1 === "Create Marksheet" && (
        <div className="mainsection">
          <h1>Announce The Exam Marks</h1>
          {/* <TableComponent /> */}
          <MarkLists />
        </div>
      )}

      {name1 === "Create New User" && (
        <div className="mainsection">
          <h1>Create New User Account</h1>
          <Box
            component="form"
            noValidate
            onSubmit={handleCreateUser}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={5}>
              <Grid item xs={5}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="NAME"
                  name="name"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={5}>
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
              <Grid item xs={5}>
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
              <Grid item xs={5}>
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
              <Grid item xs={5}>
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
              <Grid item xs={5}>
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
              <Grid item xs={5}>
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
              <Grid item xs={5}>
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
              <Grid item xs={5}>
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
              <Grid item xs={5}>
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
              <Grid item xs={5}>
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
              <Grid item xs={5}>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ my: 1.5}}
            >
              SAVE STUDENT
            </Button>
              </Grid>
            </Grid>
            
          </Box>
        </div>
      )}

      {name1 === "Update Profile" && (
        <div className="mainsection">
          <h1>Update User Information</h1>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              "& .MuiTextField-root": { m: 2, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-name-input"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              id="outlined-gender-input"
              select
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              {["Male", "Female", "Other"].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-role-input"
              select
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              {[
                "Head Master",
                "Vice Head Master",
                "Teacher Admin",
                "Teacher",
                "Student Admin",
                "Student Class Leader",
                "Student",
              ].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-password-input"
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
            <TextField
              id="outlined-phonenumber-input"
              label="Phone Number"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
            />
            <TextField
              id="outlined-qualification-input"
              select
              label="Qualification"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
            >
              {["bTech", "Mtech", "B.Ed", "M.Ed"].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-experience-input"
              label="Experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
            <TextField
              id="outlined-yearofjoin-input"
              label="Year Of Join"
              name="yearOfJoin"
              value={formData.yearOfJoin}
              onChange={handleChange}
            />
            <TextField
              id="outlined-subjects-input"
              select
              label="Subjects"
              name="subjects"
              value={formData.subjects}
              onChange={handleChange}
            >
              {["Telugu", "Hindi", "English", "Maths", "Science", "Social"].map(
                (option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                )
              )}
            </TextField>
            <TextField
              id="outlined-class-input"
              select
              label="Class"
              name="class"
              value={formData.class}
              onChange={handleChange}
            >
              {[
                "4th Class",
                "5th Class",
                "6th Class",
                "7th Class",
                "8th Class",
                "9th Class",
                "10th Class",
              ].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <Button
              // variant="contained"
              // type="submit"
              // sx={{ marginTop: 2, marginLeft: 10 }}
              type="submit"
              // fullWidth
              variant="contained"
              sx={{ my: 3, mx:5 ,width: "25ch"} }
            >
              Save Updates
            </Button>
          </Box>
        </div>
      )}

      <div className="blogsection">
        <h1>BLOGS</h1>
        {blogs.map((blog) => (
          <Accordion expanded={expanded === `${blog._id}`} onChange={handleChangeBlog(blog._id)} sx={{my:5}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          {blog.heading}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{blog.idnumber}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {blog.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
        ))}

      </div>
    </div>
  );
};

export default UserHome;

