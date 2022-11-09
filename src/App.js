import React from "react";
import "./App.css";
import Content from "./components/content";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
