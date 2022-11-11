import React, { useCallback } from "react";
import "./App.css";
import Content from "./components/content";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

const drawerWidth = "100%";

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    border: "none",

    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    height: "100vh",
    backgroundColor: "transparent",
    ...(!open && {
      overflowX: "hidden",

      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

function App() {
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const onCollapsedToggle = useCallback(() => {
    console.log("togled", isCollapsed);
    setIsCollapsed(!isCollapsed);
  }, [isCollapsed]);

  return (
    <Box style={{ display: "flex", flexFlow: "row nowrap" }}>
      <Drawer variant="permanent" open={!isCollapsed}>
        <Sidebar onCollapsedToggle={onCollapsedToggle} />
      </Drawer>
      <Box>
        <Content />
        <Footer />
      </Box>
    </Box>
  );
}

{
  /* <Header /> */
}

export default App;
