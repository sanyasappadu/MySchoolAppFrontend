

import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import "./userhome.css";
import axios from "axios";

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
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
          `https://myschoolappbackend.onrender.com/api/updateUser/${userEmail}`,
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
        const response = await fetch(`https://myschoolappbackend.onrender.com/api/getUser/${userEmail}`);
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
        const response = await fetch('https://myschoolappbackend.onrender.com/api/blogs');
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
                    {text === "Profile Details" && <AccountCircleTwoToneIcon />}
                    {text === "Update Profile" && <ManageAccountsTwoToneIcon />}
                    {text === "Create New User" && <ManageAccountsTwoToneIcon />}
                    {text === "Create Blogs" && <FactCheckTwoToneIcon />}
                    {text === "Create Marksheet" && <FactCheckTwoToneIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </div>
      {name1 === "Profile Details" && (
        <div className="mainsection">
             <Card sx={{ maxWidth: "100%" , height:600, margin: 4 }}>
      <CardMedia
        sx={{ height: 300 , width: 300, marginLeft: "30%", marginTop: "5%" }}
        image="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"
        title="green iguana"
      />
      <CardContent sx={{display: "flex", flexDirection:"row", marginLeft:"25%"}}>
        <Typography gutterBottom variant="h3" component="div">
          {name}
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{marginTop:2.5, marginLeft:2}}>
        {qualification || clas}
        </Typography>
      </CardContent>
      <Typography variant="h4" color="text.secondary" sx={{marginLeft: "26.5%"}}>
        {role}
        </Typography>
        <Typography variant="h4" color="text.secondary" sx={{marginLeft: "26.5%", marginTop:2}}>
        {idnumber}
        </Typography>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
          {/* <div>
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
          </div> */}
        </div>
      )}
      {name1 === "blog" && (
        <div className="mainsection">
          <h1 style={{marginLeft:"10%"}}>BLOG DETAILS</h1>
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

      {name1 === "Create Blogs" && (
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
      {name1 === "Create Marksheet" && (
        <div className="mainsection">
          <h1>Announce The Exam Marks</h1>
          {/* <TableComponent /> */}
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
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="NAME"
                  name="name"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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
      {name1 === "Update Profile" && (
          <div className="mainsection">
          <h1>Update User Information</h1>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
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
              variant="contained"
              type="submit"
              sx={{ marginTop: 2, marginLeft: 10 }}
            >
              Save Updates
            </Button>
          </Box>
        </div>
        // <div className="mainsection">
        //   <h1>Create New Teacher Account</h1>
        //   <Box
        //     component="form"
        //     sx={{
        //       "& .MuiTextField-root": { m: 1, width: "25ch" },
        //     }}
        //     noValidate
        //     autoComplete="off"
        //   >
        //     <div>
        //       <Box
        //         component="form"
        //         sx={{
        //           "& .MuiTextField-root": { m: 1, width: "25ch" },
        //         }}
        //         noValidate
        //         autoComplete="off"
        //       >
        //         <TextField
        //           id="outlined-password-input"
        //           label="Name"
        //           type="name"
        //         />
        //         <TextField
        //           id="outlined-password-input"
        //           select
        //           label="Gender"
        //           type="gender"
        //         >
        //           {[
        //             { value: "Male" },
        //             { value: "Female" },
        //             { value: "Others" },
        //           ].map((option) => (
        //             <MenuItem key={option.value} value={option.value}>
        //               {option.value}
        //             </MenuItem>
        //           ))}
        //         </TextField>
        //         <TextField
        //           id="outlined-password-input"
        //           select
        //           label="Role"
        //           type="role"
        //         >
        //           {[
        //             { value: "Head Master" },
        //             { value: "Vice Head Master" },
        //             { value: "Teacher Admin" },
        //             { value: "Teacher" },
        //             { value: "Student Admin" },
        //             { value: "Student Class Leader" },
        //             { value: "Student" },
        //           ].map((option) => (
        //             <MenuItem key={option.value} value={option.value}>
        //               {option.value}
        //             </MenuItem>
        //           ))}
        //         </TextField>
        //         <TextField
        //           id="outlined-password-input"
        //           label="Email"
        //           type="email"
        //         />
        //         <TextField
        //           id="outlined-password-input"
        //           label="Password"
        //           type="password"
        //           autoComplete="current-password"
        //         />
        //         <TextField
        //           id="outlined-password-input"
        //           label="Phone Number"
        //           type="phonenumber"
        //         />
        //         <TextField
        //           id="outlined-password-input"
        //           select
        //           label="Qualification"
        //           type="qualification"
        //         >
        //           {[
        //             { value: "bTech" },
        //             { value: "Mtech" },
        //             { value: "B.Ed" },
        //             { value: "M.Ed" },
        //           ].map((option) => (
        //             <MenuItem key={option.value} value={option.value}>
        //               {option.value}
        //             </MenuItem>
        //           ))}
        //         </TextField>
        //         <TextField
        //           id="outlined-password-input"
        //           label="Experience"
        //           type="experience"
        //         />
        //         <TextField
        //           id="outlined-password-input"
        //           label="Year Of Join"
        //           type="yearofjoin"
        //         />
        //         <TextField
        //           id="outlined-password-input"
        //           select
        //           label="Subjects"
        //           type="subjects"
        //         >
        //             {[
        //             { value: "Telugu" },
        //             { value: "Hindi" },
        //             { value: "English" },
        //             { value: "Maths" },
        //             { value: "Science" },
        //             { value: "Social" },
        //           ].map((option) => (
        //             <MenuItem key={option.value} value={option.value}>
        //               {option.value}
        //             </MenuItem>
        //           ))}
        //         </TextField>
        //         <TextField
        //           id="outlined-password-input"
        //           select
        //           label="Class"
        //           type="class"
        //         >
        //             {[
        //             { value: "4th Class" },
        //             { value: "5th Class" },
        //             { value: "6th Class" },
        //             { value: "7th Class" },
        //             { value: "8th Class" },
        //             { value: "9th Class" },
        //             { value: "10th Class" },
        //           ].map((option) => (
        //             <MenuItem key={option.value} value={option.value}>
        //               {option.value}
        //             </MenuItem>
        //           ))}
        //         </TextField>
                
        //         <Button
        //           variant="contained"
        //           sx={{ marginTop: 2, marginLeft: 10 }}
        //         >
        //           Save Updates
        //         </Button>
        //       </Box>
        //     </div>
        //   </Box>
        // </div>
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

