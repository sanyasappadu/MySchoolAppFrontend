import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useAuth } from '../context/AuthConext';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import Avatar from '@mui/material/Avatar';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function DrawerAppBar(props) {
  const { user, logout } = useAuth(); // Combined useAuth calls
  const [userMail, setUserMail] = useState(null); // Initialize with null for clarity
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (user?.userEmail) {
      setUserMail(user.userEmail); // Set userMail when userEmail is available
    }
  }, [user]); // Dependency array to update when 'user' changes

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  function handleLogout() {
    logout();
  }

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", height: '100px' }}>
      <AppBar component="nav" sx={{ bgcolor: 'aliceblue', height: "100px", display: 'flex', justifyContent: 'center', pr: 5 }}>
        <Toolbar sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          <Avatar sx={{ bgcolor: 'primary.main', ml: 10, display: { md: 'none' } }}>
            <CorporateFareIcon />
          </Avatar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, color: "black", ml: 10, display: { xs: 'none', md: 'block' } }}
          >
            {/* Corrected Link with Dynamic Path */}
            {userMail && (
              <Link to={`/home/${userMail}`}>My English Medium School</Link>
            )}
          </Typography>

          {/* Display user email if user exists */}
          {userMail && <h1>{userMail}</h1>}
          
          <Box sx={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <Link to="/forms" className="link-component">
              <Button sx={{ color: "black" }}>
                Forms
              </Button>
            </Link>
            <Link to="/" className="link-component">
              <Button sx={{ color: "black", ml: 5, mr: 5 }}>
                Home
              </Button>
            </Link>
            {user ? (
              <Button onClick={handleLogout}>Logout</Button>
            ) : (
              <Link to="/login">
                <Button>LogIn</Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
      </Box>
      <Toolbar />
    </Box>
  );
}
