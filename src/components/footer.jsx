import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Unstable_Grid2";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#F1EFF2", p: 2 }}>
      <Grid
        container
        sx={{ fontSize: "0.8em", fontWeight: 700, textAlign: "left" }}
      >
        <Grid xs={6} xl={1.5}>
          Support
        </Grid>
        <Grid xs={6} xl={1.5}>
          Help
        </Grid>
        <Grid xs={6} xl={1.5}>
          Center
        </Grid>
        <Grid xs={6} xl={1.5}>
          Terms of Service
        </Grid>
        <Grid xs={12} xl={6} sx={{ textAlign: "right" }}>
          <span>
            {"CloudHotel"} &copy; {new Date().getFullYear()} {"CorpCloud"}
          </span>
        </Grid>
      </Grid>
    </Box>
  );
}
