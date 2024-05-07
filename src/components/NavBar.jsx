import { Link } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./navbar.css";
function NavBar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static"> 
          <Toolbar>
          <Link to="/" className="link-component">
            <Button color="inherit" variant="h6" component="div" sx={{bgcolor:"white" , marginRight: 100, marginLeft:2}}>Home</Button>
            </Link>
            <Link to="/login" className="link-component">
            <Button color="inherit" variant="h6" sx={{bgcolor:"white"}}>Blogs</Button>
            </Link>
            <Link to="/signup" className="link-component">
            <Button color="inherit" variant="h6" sx={{bgcolor:"white"}}>Signup</Button>
            </Link>
            <Link to="/login" className="link-component">
            <Button color="inherit" variant="h6" sx={{bgcolor:"white"}}>Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default NavBar;
