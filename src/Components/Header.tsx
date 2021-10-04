import React from "react";
import { Grid, ButtonGroup, Button, Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Grid
      container
      justifyContent="space-between"
      sx={{ backgroundColor: "lightcyan", borderRadius: "1em" }}
    >
      <Grid item>
        <Box>
          <Button sx={{ fontSize: "2.6rem", border: "0.1em dashed grey" }}>
            Gautam Vaja
          </Button>
          <Typography variant="subtitle1" color="grey">
            Software Devloper
          </Typography>
        </Box>
      </Grid>

      <Grid item>
        <ButtonGroup size="large" variant="text" aria-label="text button group">
          <Button>Resume</Button>
          <Button>Projects</Button>
          <Button>Contact Me</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
