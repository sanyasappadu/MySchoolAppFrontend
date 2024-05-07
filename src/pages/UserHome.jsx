
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
  const { userEmail } = useParams();

  console.log(userEmail);
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
    hm : ["profileDetails", "creatTeacher", "createStudent", "createBlogs", "createMarkSheet"],
    vhm : ["profileDetails", "creatTeacher", "createStudent", "createBlogs", "createMarkSheet"],
    teacherAdmin : ["profileDetails", "creatTeacher", "createStudent", "createBlogs", "createMarkSheet"],
    teacher : ["profileDetails", "createBlogs", "createMarkSheet"],
    classLeader : ["profileDetails", "createBlogs", "createMarkSheet"],
    studentAdmin : ["profileDetails", "createBlogs", "createMarkSheet"],
    student : ["profileDetails"],
  }
  const [data, setData] = useState(null);

  // Function to fetch data from the API
  const fetchData = async () => {
    
    try {
      // const response = await fetch('http://localhost:4000/api/getUser/T024MES234');
      const response = await fetch(`https://myschoolappbackend.onrender.com/api/getUser/${userEmail}`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []); // empty dependency array means this effect runs once after the first render

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

      </div>
    </div>
  );
};

export default UserHome;

