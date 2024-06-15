import {
  AppBar,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Popover,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "avatar-popover" : undefined;

  return (
    <div className="header_container mb-12">
      <div className="header mx-auto px-[20px] max-w-[1800px]">
        <AppBar
          position="static"
          sx={{ backgroundColor: "white", boxShadow: "none" }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link to="/">
                <img
                  src="/assets/images/frame_1.png"
                  alt="Logo"
                  style={{ height: "50px", marginRight: "20px" }}
                />
              </Link>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button to="/" sx={{ marginRight: "10px" }}>
                <span className="text-black font-bold">Buy Property</span>
              </Button>
              <Button to="/" sx={{ marginRight: "10px" }}>
                <span className="text-black font-bold">Rent Property</span>
              </Button>
              <Button sx={{ marginRight: "10px" }}>
                <Link
                  to="/property-management-services"
                  className="text-black font-bold"
                >
                  Property Maintainance
                </Link>
              </Button>

              <Avatar
                alt="User Avatar"
                src="/assets/images/avatar.jpg"
                sx={{ cursor: "pointer", marginLeft: "10px" }}
                onClick={handleAvatarClick}
              />
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <List>
                  <ListItem onClick={handleClose}>
                    <ListItemIcon>
                      <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Open Profile" />
                  </ListItem>
                  <ListItem onClick={handleClose}>
                    <ListItemIcon>
                      <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItem>
                </List>
              </Popover>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default Header;
