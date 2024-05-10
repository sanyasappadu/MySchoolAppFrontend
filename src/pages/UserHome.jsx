
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import "./userhome.css";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
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
  const [data, setData] = useState(null);
  const [name, setName] = useState(null);
  const [userRole, setUserRole] = useState("student");
  const [userRole1, setUserRole1] = useState([]);
  const [name1, setName1] = useState("profileDetails");
  const [formData, setFormData] = useState({
    idNumber: '',
    name: '',
    heading: '',
    relatedLinks: '',
    description: '',
    briefDescription: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSave = async () => {
    try {
      const response = await fetch('https://myschoolappbackend.onrender.com/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Reset form data after successful save
      setFormData({
        idNumber: '',
        name: '',
        heading: '',
        relatedLinks: '',
        description: '',
        briefDescription: ''
      });
      console.log('Blog saved successfully');
    } catch (error) {
      console.error('Error saving blog:', error);
    }
  };
  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch(`https://myschoolappbackend.onrender.com/api/getUser/${userEmail}`);
      const jsonData = await response.json();
      // setUserRole();
      setUserRole1(roles[jsonData.user.role])

      console.log(jsonData.user.role);
      setName(jsonData.user.name);
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    console.log(userRole)
    fetchData();
    console.log(userRole)
  }, []); 
  // console.log(data)
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
            {userRole1.map((text, index) => (
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

      {name1 === "createBlogs" && (
     <div className="mainsection">
     <h1>Create blogs</h1>
     <form
       onSubmit={(e) => {
         e.preventDefault();
         handleSave();
       }}
     >
       <div>
         <TextField
           id="idNumber"
           name="idNumber"
           label="Id Number"
           type="text"
           value={formData.idNumber}
           onChange={handleChange}
         />
         <TextField
           id="name"
           name="name"
           label="Name"
           type="text"
           value={formData.name}
           onChange={handleChange}
         />
         <TextField
           id="heading"
           name="heading"
           label="Heading"
           type="text"
           value={formData.heading}
           onChange={handleChange}
         />
         <TextField
           id="relatedLinks"
           name="relatedLinks"
           label="Related Links"
           type="text"
           value={formData.relatedLinks}
           onChange={handleChange}
         />
       </div>
       <TextField
         id="description"
         name="description"
         label="Description"
         type="text"
         multiline
         rows={4}
         value={formData.description}
         onChange={handleChange}
       />
       <TextField
         id="briefDescription"
         name="briefDescription"
         label="Brief Description"
         type="text"
         multiline
         rows={6}
         value={formData.briefDescription}
         onChange={handleChange}
       />
       <Button
         type="submit"
         variant="contained"
         sx={{ marginTop: 2, marginLeft: 10 }}
       >
         Save
       </Button>
     </form>
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
          <h1>Create New Student Account</h1>
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
                  label="Role"
                  type="role"
                >
                  {[
                    { value: "studentAdmin" },
                    { value: "classLeader" },
                    { value: "student" },
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
                  label="Class"
                  type="class"
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

      {/* <div className="mainsection">
        <div>
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}
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
                <h3>Qualification : </h3>
                <h3 style={{ marginLeft: "10px" }}>M.Ed</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <h3> Designation : </h3>
                <h3 style={{ marginLeft: "10px" }}>HEAD MASTER</h3>
              </div>
            </div>
          </div>
          <div>
            <h2>Year Of Working</h2>
            <p>joined in this school 2018 june 16 and contiuing</p>
          </div>
        </div>
      </div> */}
      {/* 
      <div className="mainsection">
        <div>
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}
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
      </div> */}
      {/* <div>
      <h1>API Data:</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div> */}

      <div className="blogsection">
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default UserHome;
