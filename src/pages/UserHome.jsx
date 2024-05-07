
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import "./userhome.css";
import TableComponent from '../components/TableComponent';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const UserHome = () => {
  const { userType } = useParams();
  console.log(userType);
  const subjects = [
    { name: <h3>Subject</h3>, marks: <h3>Marks</h3> },
    { name: "Telugu", marks: 20 },
    { name: "Hindi", marks: 20 },
    { name: "English", marks: 20 },
    { name: "Maths", marks: 20 },
    { name: "Science", marks: 20 },
    { name: "Social", marks: 20 },
  ];
  const [formData, setFormData] = useState({
    idNumber: '',
    name: '',
    class: '',
    unitTest: '',
    telugu: '',
    hindi: '',
    english: '',
    maths: '',
    science: '',
    social: ''
  });
  // const [data, setData] = useState(null);

  // // Function to fetch data from the API
  // const fetchData = async () => {
  //   try {
  //     // const response = await fetch('http://localhost:4000/api/getUser/T024MES234');
  //     const response = await fetch('https://myschoolappbackend.onrender.com/api/getUser/T024MES208');
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // // useEffect hook to fetch data when component mounts
  // useEffect(() => {
  //   fetchData();
  // }, []); // empty dependency array means this effect runs once after the first render


  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to backend or perform any action
    console.log(formData); // For testing, you can log the form data to the console
    // Reset form after submission (if needed)
    setFormData({
      idNumber: '',
      name: '',
      class: '',
      unitTest: '',
      telugu: '',
      hindi: '',
      english: '',
      maths: '',
      science: '',
      social: ''
    });
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const renderFeatures = () => {
    switch (userType) {
      case "hm":
        return (
          <div className="home-side-container">
            <div>
              <img
                className="side-container-img"
                src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"
                alt=""
              />
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>HM</h2>
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }} con>Profile Details</h2>
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>Create teachers</h2>
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>Create students</h2>
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>Manage Marks</h2>
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>Manage blogs</h2>
            </div>
          </div>
        );
      case "vhm":
        return (
          <div className="home-side-container">
            <div>
              <img
                className="side-container-img"
                src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"
                alt=""
              />
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>VHM</h2>
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>Profile Details</h2>
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>Create teachers</h2>
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>Create students</h2>
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>Manage Marks</h2>
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>Manage blogs</h2>
            </div>
          </div>
        );
      case "teacher-admin":
        return (
          <div className="home-side-container">
            <div>
              <img
                className="side-container-img"
                src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"
                alt=""
              />
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>TEACHER-ADMIN</h2>
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>Profile Details</h2>
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>Create teachers</h2>
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>Create students</h2>
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>Manage Marks</h2>
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>Manage blogs</h2>
            </div>
          </div>
        );
      case "teacher":
        return (
          <div className="home-side-container">
            <div>
              <img
                className="side-container-img"
                src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"
                alt=""
              />
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>TEACHER</h2>
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>Profile Details</h2>
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>Manage Marks</h2>
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>Manage blogs</h2>
            </div>
          </div>
        );
      case "class-leader":
        return (
          <div className="home-side-container">
            <div>
              <img
                className="side-container-img"
                src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"
                alt=""
              />
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>CLASS-LEADER</h2>
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>Profile Details</h2>
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>Manage Marks</h2>
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>Manage blogs</h2>
            </div>
          </div>
        );
      case "student-admin":
        return (
          <div className="home-side-container">
            <div>
              <img
                className="side-container-img"
                src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"
                alt=""
              />
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>STUDENT-ADMIN</h2>
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>Profile Details</h2>
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>Manage Marks</h2>
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>Manage blogs</h2>
            </div>
          </div>
        );
      case "student":
        return (
          <div className="home-side-container">
            <div>
              <img
                className="side-container-img"
                src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"
                alt=""
              />
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>STUDENT</h2>
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>Profile Details</h2>
            </div>
          </div>
        );

      default:
        return <div>Invalid user type</div>;
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {/* <div className="sidebar">{renderFeatures()}</div> */}
      <div className="sidebar">
        <Box sx={{ display: "flex", m: 2 }}>
          <List>
            <ListItem disablePadding sx={{ m: 2 }}>
              <Avatar
                alt="Remy Sharp"
                src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"
                sx={{ width: 56, height: 56, ml:10, mb:2 }}
              />
            </ListItem>
            <ListItem disablePadding sx={{ m: 2 }}>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"Profile Details"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ m: 2 }}>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"Create Teacher"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ m: 2 }}>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"Create Student"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ m: 2 }}>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"Manage Marks"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ m: 2 }}>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"Manage Blogs"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </div>
      {/* 
      <div className='mainsection'>
        <h1>Create blogs</h1>
        <div>
          <label>Id Number</label>
          <input></input>
        </div>
        <div>
          <label>Name</label>
          <input></input>
        </div>
        <div>
          <label>Heading</label>
          <input></input>
        </div>
        <div className='use-columntype'>
          <label>Description</label>
          <input style={{width:"500px", height:"300px"}}></input>
        </div>
        <div>
          <label>Related Links</label>
          <input></input>
        </div>
        <div>
        <button>Save Blog</button>
      </div>
      </div>
  */}

      {/* <div className="marksection">
      <h1>Announce The Exam Marks</h1>
      <TableComponent />
    </div> */}

      {/* <div className="mainsection">
      <h1>Create New Student Account</h1>
      <div style={{ display:"flex", flexWrap: "wrap"}}>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Name</label>
          <input style={{width:"200px"}}></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Gender</label>
          <input style={{width:"200px"}}></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Email</label>
          <input style={{width:"200px"}}></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Password</label>
          <input style={{width:"200px"}}></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Class</label>
          <input style={{width:"200px"}}></input>
        </div>

        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Role</label>
          <input style={{width:"200px"}}></input>
        </div>

        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Phone Number</label>
          <input style={{width:"200px"}}></input>
        </div>

        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <button style={{width:"200px"}}>Save</button>
        </div>
      </div>
    </div>  */}

      {/* <div className="mainsection">
      <h1>Create New Teacher Account</h1>
      <div style={{ display:"flex", flexWrap: "wrap"}}>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Name</label>
          <input style={{width:"200px"}}></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Gender</label>
          <input style={{width:"200px"}}></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Email</label>
          <input style={{width:"200px"}}></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Password</label>
          <input style={{width:"200px"}}></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Qualification</label>
          <input style={{width:"200px"}}></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Designation</label>
          <input style={{width:"200px"}}></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Experience</label>
          <input style={{width:"200px"}}></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Phone Number</label>
          <input style={{width:"200px"}}></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Subjects</label>
          <input style={{width:"200px"}}></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <button style={{width:"200px"}}>Save</button>
        </div>
      </div>
    </div> */}

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
      </div>  */}

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
      </div>
      {/* <div>
      <h1>API Data:</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div> */}

      <div className="blogsection">
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
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
                sx={{ display: 'inline' }}
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
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
        {/* <div>
          <h2>School Games August 15</h2>
          <p>
            Here let us have a look at some of the interesting Independence Day
            celebrations and activities for schools that instills the freedom
            spirit in kids.
          </p>
        </div>
        <div>
          <h2>School Games August 15</h2>
          <p>
            Here let us have a look at some of the interesting Independence Day
            celebrations and activities for schools that instills the freedom
            spirit in kids.
          </p>
        </div>
        <div>
          <h2>School Games August 15</h2>
          <p>
            Here let us have a look at some of the interesting Independence Day
            celebrations and activities for schools that instills the freedom
            spirit in kids.
          </p>
        </div>
        <div>
          <h2>School Games August 15</h2>
          <p>
            Here let us have a look at some of the interesting Independence Day
            celebrations and activities for schools that instills the freedom
            spirit in kids.
          </p>
        </div>
        <div>
          <h2>School Games August 15</h2>
          <p>
            Here let us have a look at some of the interesting Independence Day
            celebrations and activities for schools that instills the freedom
            spirit in kids.
          </p>
        </div>
        <div>
          <h2>School Games August 15</h2>
          <p>
            Here let us have a look at some of the interesting Independence Day
            celebrations and activities for schools that instills the freedom
            spirit in kids.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default UserHome;




// import React, { useState } from 'react';
// import { useParams } from "react-router-dom";
// import "./userhome.css";
// import TableComponent from '../components/TableComponent';

// const UserHome = () => {
//   const { userType } = useParams();
//   console.log(userType);
//   const subjects = [
//     { name: <h3>Subject</h3>, marks: <h3>Marks</h3> },
//     { name: "Telugu", marks: 20 },
//     { name: "Hindi", marks: 20 },
//     { name: "English", marks: 20 },
//     { name: "Maths", marks: 20 },
//     { name: "Science", marks: 20 },
//     { name: "Social", marks: 20 },
//   ];
  
//   const [mainSection, setMainSection] = useState("profile");
//   const [formData, setFormData] = useState({
//     idNumber: '',
//     name: '',
//     class: '',
//     unitTest: '',
//     telugu: '',
//     hindi: '',
//     english: '',
//     maths: '',
//     science: '',
//     social: ''
//   });
//   const handleSelect = (e) => {
//     const value = e.currentTarget.getAttribute("data-value");
//     setMainSection(value)
//     console.log(mainSection);

//   };
  

//   const renderFeatures = () => {
//     switch (userType) {
//       case "hm":
//       case "vhm":
//       case "teacher-admin":  
//         return (
//           <div className="home-side-container">
//             <div>
//               <img
//                 className="side-container-img"
//                 src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"
//                 alt=""
//               />
//             </div>
//             <div className="side-container-box">
//               <h2 style={{ marginLeft: "50px" }}>HM</h2>
//             </div>
//             <div className="side-container-box" onClick={handleSelect} data-value={"hm-profile"}>
//               <h2 style={{ marginLeft: "50px" }}  >Profile Details</h2>
//             </div>
//             <div className="side-container-box" data-value={"createNewTeacher"} onClick={handleSelect}>
//               <h2 style={{ marginLeft: "50px" }} >Create teachers</h2>
//             </div>
//             <div className="side-container-box" data-value={"createNewStudent"} onClick={handleSelect}>
//               <h2 style={{ marginLeft: "50px" }} >Create students</h2>
//             </div>
//             <div className="side-container-box" data-value={"manageMarks"} onClick={handleSelect}>
//               <h2 style={{ marginLeft: "50px" }} >Manage Marks</h2>
//             </div>
//             <div className="side-container-box" data-value={"manageBlogs"} onClick={handleSelect}>
//               <h2 style={{ marginLeft: "50px" }} >Manage blogs</h2>
//             </div>
//           </div>
//         );

//       case "teacher":
//         return (
//           <div className="home-side-container">
//             <div>
//               <img
//                 className="side-container-img"
//                 src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"
//                 alt=""
//               />
//             </div>
//             <div className="side-container-box">
//               <h2 style={{ marginLeft: "50px" }}>TEACHER</h2>
//             </div>
//             <div className="side-container-box" onClick={handleSelect} data-value={"teacher-profile"}>
//               <h2 style={{ marginLeft: "50px" }}>Profile Details</h2>
//             </div>
//             <div className="side-container-box" data-value={"manageMarks"} onClick={handleSelect}>
//               <h2 style={{ marginLeft: "50px" }}>Manage Marks</h2>
//             </div>
//             <div className="side-container-box" data-value={"manageBlogs"} onClick={handleSelect}>
//               <h2 style={{ marginLeft: "50px" }}>Manage blogs</h2>
//             </div>
//           </div>
//         );
//       case "class-leader":
//       case "student-admin":
//         return (
//           <div className="home-side-container">
//             <div>
//               <img
//                 className="side-container-img"
//                 src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"
//                 alt=""
//               />
//             </div>
//             <div className="side-container-box">
//               <h2 style={{ marginLeft: "50px" }}>CLASS-LEADER</h2>
//             </div>
//             <div className="side-container-box" onClick={handleSelect} data-value={"student-profile"}>
//               <h2 style={{ marginLeft: "50px" }}>Profile Details</h2>
//             </div>
//             <div className="side-container-box" data-value={"manageMarks"} onClick={handleSelect}>
//               <h2 style={{ marginLeft: "50px" }}>Manage Marks</h2>
//             </div>
//             <div className="side-container-box" data-value={"manageBlogs"} onClick={handleSelect}>
//               <h2 style={{ marginLeft: "50px" }}>Manage blogs</h2>
//             </div>
//           </div>
//         );

//       case "student":
//         return (
//           <div className="home-side-container">
//             <div>
//               <img
//                 className="side-container-img"
//                 src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"
//                 alt=""
//               />
//             </div>
//             <div className="side-container-box">
//               <h2 style={{ marginLeft: "50px" }}>STUDENT</h2>
//             </div>
//             <div className="side-container-box" onClick={handleSelect} data-value={"student-profile"}>
//               <h2 style={{ marginLeft: "50px" }}>Profile Details</h2>
//             </div>
//           </div>
//         );

//       default:
//         return <div>Invalid user type</div>;
//     }
//   };

//   return (
//     <div style={{ display: "flex", flexDirection: "row" }}>
//       <div className="sidebar">{renderFeatures()}</div>


//       {mainSection === "profile" ? 
//           <div className="mainsection">
//         <div >
//          <h1 style={{marginLeft:"100px", marginTop:"200px"}}>You can see all your activities here !</h1>
//         </div>
//       </div> :<></>  
//     }
//       {mainSection === "hm-profile" ? 
//           <div className="mainsection">
//         <div>
//           <div
//             style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}
//           >
//             <img
//               className="profile-img"
//               src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"
//               alt=""
//             />
//             <div style={{ marginLeft: "50px" }}>
//               <div style={{ display: "flex", flexDirection: "row" }}>
//                 <h3>Name : </h3>
//                 <h3 style={{ marginLeft: "10px" }}>Virat Kohli</h3>
//               </div>
//               <div style={{ display: "flex", flexDirection: "row" }}>
//                 <h3>Qualification : </h3>
//                 <h3 style={{ marginLeft: "10px" }}>M.Ed</h3>
//               </div>
//               <div style={{ display: "flex", flexDirection: "row" }}>
//                 <h3> Designation : </h3>
//                 <h3 style={{ marginLeft: "10px" }}>HEAD MASTER</h3>
//               </div>
//             </div>
//           </div>
//           <div>
//             <h2>Year Of Working</h2>
//             <p>joined in this school 2018 june 16 and contiuing</p>
//           </div>
//         </div>
//       </div> :<></>  
//     }

// {mainSection === "teacher-profile" ? 
//           <div className="mainsection">
//         <div>
//           <div
//             style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}
//           >
//             <img
//               className="profile-img"
//               src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"
//               alt=""
//             />
//             <div style={{ marginLeft: "50px" }}>
//               <div style={{ display: "flex", flexDirection: "row" }}>
//                 <h3>Name : </h3>
//                 <h3 style={{ marginLeft: "10px" }}>Virat Kohli</h3>
//               </div>
//               <div style={{ display: "flex", flexDirection: "row" }}>
//                 <h3>Qualification : </h3>
//                 <h3 style={{ marginLeft: "10px" }}>B.Ed</h3>
//               </div>
//               <div style={{ display: "flex", flexDirection: "row" }}>
//                 <h3> Designation : </h3>
//                 <h3 style={{ marginLeft: "10px" }}>TEACHER</h3>
//               </div>
//             </div>
//           </div>
//           <div>
//             <h2>Year Of Working</h2>
//             <p>joined in this school 2018 june 16 and contiuing</p>
//           </div>
//         </div>
//       </div> :<></>  
//     }
//     {mainSection === "createNewTeacher" ? 
//      <div className="mainsection">
//       <h1>Create New Teacher Account</h1>
//       <div style={{ display:"flex", flexWrap: "wrap"}}>
//         <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
//           <label>Name</label>
//           <input style={{width:"200px"}}></input>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
//           <label>Gender</label>
//           <input style={{width:"200px"}}></input>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
//           <label>Email</label>
//           <input style={{width:"200px"}}></input>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
//           <label>Password</label>
//           <input style={{width:"200px"}}></input>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
//           <label>Qualification</label>
//           <input style={{width:"200px"}}></input>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
//           <label>Designation</label>
//           <input style={{width:"200px"}}></input>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
//           <label>Experience</label>
//           <input style={{width:"200px"}}></input>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
//           <label>Phone Number</label>
//           <input style={{width:"200px"}}></input>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
//           <label>Subjects</label>
//           <input style={{width:"200px"}}></input>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
//           <button style={{width:"200px"}}>Save</button>
//         </div>
//       </div>
//     </div> : <></>

//     }
//     {mainSection === "createNewStudent" ?  
//       <div className="mainsection">
//       <h1>Create New Student Account</h1>
//       <div style={{ display:"flex", flexWrap: "wrap"}}>
//         <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
//           <label>Name</label>
//           <input style={{width:"200px"}}></input>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
//           <label>Gender</label>
//           <input style={{width:"200px"}}></input>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
//           <label>Email</label>
//           <input style={{width:"200px"}}></input>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
//           <label>Password</label>
//           <input style={{width:"200px"}}></input>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
//           <label>Class</label>
//           <input style={{width:"200px"}}></input>
//         </div>

//         <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
//           <label>Role</label>
//           <input style={{width:"200px"}}></input>
//         </div>

//         <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
//           <label>Phone Number</label>
//           <input style={{width:"200px"}}></input>
//         </div>

//         <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
//           <button style={{width:"200px"}}>Save</button>
//         </div>
//       </div>
//     </div>  :<></>
//     }
//     {mainSection === "manageMarks" ? 
//     <div className="marksection">
//       <h1>Announce The Exam Marks</h1>
//       <TableComponent />
//     </div> : <></>

//   }
// { mainSection === "manageBlogs" ? 
//       <div className='mainsection'>
//         <h1>Create blogs</h1>
//         <div>
//           <label>Id Number</label>
//           <input></input>
//         </div>
//         <div>
//           <label>Name</label>
//           <input></input>
//         </div>
//         <div>
//           <label>Heading</label>
//           <input></input>
//         </div>
//         <div className='use-columntype'>
//           <label>Description</label>
//           <input style={{width:"500px", height:"100px"}}></input>
//         </div><div className='use-columntype'>
//           <label>Breif Description</label>
//           <input style={{width:"500px", height:"200px"}}></input>
//         </div>
//         <div>
//           <label>Related Links</label>
//           <input></input>
//         </div>
//         <div>
//         <button>Save Blog</button>
//       </div>
//       </div> : <></>
//   }
// { mainSection === "student-profile" ? 
//    <div className="mainsection">
//         <div>
//           <div
//             style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}
//           >
//             <img
//               className="profile-img"
//               src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"
//               alt=""
//             />
//             <div style={{ marginLeft: "50px" }}>
//               <div style={{ display: "flex", flexDirection: "row" }}>
//                 <h3>Name : </h3>
//                 <h3 style={{ marginLeft: "10px" }}>Virat Kohli</h3>
//               </div>
//               <div style={{ display: "flex", flexDirection: "row" }}>
//                 <h3>Class : </h3>
//                 <h3 style={{ marginLeft: "10px" }}>5th</h3>
//               </div>
//               <div style={{ display: "flex", flexDirection: "row" }}>
//                 <h3> Section : </h3>
//                 <h3 style={{ marginLeft: "10px" }}>A</h3>
//               </div>
//             </div>
//           </div>
//           <div>
//             <h2>Year Of Studying</h2>
//             <p>joined in this school 2018 june 16 and contiuing</p>
//           </div>
//           <div>
//             <h2>Mark sheets</h2>
//             <div>
//               <div style={{display:"flex", flexDirection:"row"}}>
//               <h5>ID Number :</h5>
//               <h5>S2017H123</h5>
//               </div>
//               <div style={{display:"flex", flexDirection:"row"}}>

//               <h5>Name :</h5>
//               <h5>Virat Kohli</h5>
//               </div>
//               <div style={{display:"flex", flexDirection:"row"}}>

//               <h5>Class : </h5>
//               <h5>5th</h5>
//               </div>
//               <div style={{display:"flex", flexDirection:"row"}}>

//               <h5>Unit Test :</h5>
//               <h5>1st</h5>
//               </div>

//             </div>
//             <table style={{ width: "100%" }}>
//               <thead>
//                 <tr>
//                   {subjects.map((subject) => (
//                     <th key={subject.name} style={{ textAlign: "start" }}>
//                       {subject.name}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   {subjects.map((subject) => (
//                     <td key={subject.name} style={{ textAlign: "start" }}>
//                       {subject.marks}
//                     </td>
//                   ))}
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>  : <> </> 
//       }

//       <div className="blogsection">
//         <div>
//           <h2>School Games August 15</h2>
//           <p>
//             Here let us have a look at some of the interesting Independence Day
//             celebrations and activities for schools that instills the freedom
//             spirit in kids.
//           </p>
//         </div>
//         <div>
//           <h2>School Games August 15</h2>
//           <p>
//             Here let us have a look at some of the interesting Independence Day
//             celebrations and activities for schools that instills the freedom
//             spirit in kids.
//           </p>
//         </div>
//         <div>
//           <h2>School Games August 15</h2>
//           <p>
//             Here let us have a look at some of the interesting Independence Day
//             celebrations and activities for schools that instills the freedom
//             spirit in kids.
//           </p>
//         </div>
//         <div>
//           <h2>School Games August 15</h2>
//           <p>
//             Here let us have a look at some of the interesting Independence Day
//             celebrations and activities for schools that instills the freedom
//             spirit in kids.
//           </p>
//         </div>
//         <div>
//           <h2>School Games August 15</h2>
//           <p>
//             Here let us have a look at some of the interesting Independence Day
//             celebrations and activities for schools that instills the freedom
//             spirit in kids.
//           </p>
//         </div>
//         <div>
//           <h2>School Games August 15</h2>
//           <p>
//             Here let us have a look at some of the interesting Independence Day
//             celebrations and activities for schools that instills the freedom
//             spirit in kids.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserHome;


