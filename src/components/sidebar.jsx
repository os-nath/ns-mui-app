import React from "react";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import { mainListItems, secondaryListItems } from "./listItems.js";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function Sidebagr(props) {
  const { onCollapsedToggle, isCollapsed } = props;

  return (
    <>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={onCollapsedToggle}>
          <ChevronLeftIcon sx={{ m: 1, color: "#FEDD00", fontWeight: 900 }} />
        </IconButton>
      </Toolbar>

      <List component="nav" sx={{ border: "none" }}>
        {mainListItems}
        <Divider sx={{ my: 1, borderColor: "transparent" }} />
        {secondaryListItems}
      </List>
    </>
  );
}
