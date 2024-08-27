import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthConext';
function PreLogin() {
  const { user } = useAuth();
  const [loginForm, setLoginForm] = useState(false);

  useEffect(() => {
    if (!user) {
      setLoginForm(true);
    } else {
      setLoginForm(false);
    }
  }, [user]);

  return (
    <div style={{marginTop:"15%",marginBottom:"25%", marginLeft:"45%"}}>
            <h2 style={{marginLeft:"2vw", marginBottom:"2vh"}}>Get started</h2>
            <div >
              <Link to="/login"  className="link-component">
                <Button>Log in</Button>
              </Link>
              <Link to="/signup" className="link-component">
                <Button sx={{ ml: 3 }}>Sign up</Button>
              </Link>
            </div>
    </div>
  )
}

export default PreLogin