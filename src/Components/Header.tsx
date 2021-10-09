import React from "react";
import {
  Grid,
  ButtonGroup,
  Button,
  Box,
  Typography,
  Avatar,
} from "@mui/material";
import myPhoto from "../assets/Images/myPhoto.png";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Resume from "../Pages/Resume";
import Portfolio from "../Pages/Portfolio";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";

export default function Header() {
  return (
    <Grid
      container
      justifyContent="space-between"
      sx={{ backgroundColor: "lightcyan", borderRadius: "1em", height: "13vh" }}
    >
      <Grid item>
        <Box>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button sx={{ fontSize: "2.6rem", border: "0.1em dashed grey" }}>
              <Avatar
                alt="Remy Sharp"
                src={myPhoto}
                sx={{ width: 56, height: 56 }}
              />
              <Typography variant="h3" color="initial">
                Gautam Vaja
              </Typography>
            </Button>
          </Link>
          <Typography variant="subtitle1" color="grey">
            Software Devloper
          </Typography>
        </Box>
      </Grid>

      <Grid item>
        <ButtonGroup size="large" variant="text" aria-label="text button group">
          <Link to="/resume">
            <Button>Resume</Button>
          </Link>
          <Link to="/portfolio">
            <Button>Projects</Button>
          </Link>
          <Link to="/contact">
            <Button>Contact Me</Button>
          </Link>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
