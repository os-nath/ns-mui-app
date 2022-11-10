import React from "react";
import "./App.css";
import Content from "./components/content";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";

function App() {
  return (
    <Box>
      <Grid container>
        <Grid xs={5} sm={5} md={4} lg={2.5} xl={2}>
          <Sidebar />
        </Grid>
        <Grid xs={7} sm={7} md={8} lg={9.5} xl={10}>
          <Content />
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
}

{
  /* <Header /> */
}

export default App;
