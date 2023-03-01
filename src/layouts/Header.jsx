import React from "react";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import tingtone from "../assets/TingTone.png";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ClassIcon from "@mui/icons-material/Class";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import PersonIcon from "@mui/icons-material/Person";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import "./header.css";
const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setLogin] = useState("Login");
  const isAboveLgScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLogin("My Account");
    } else {
      setLogin("Login");
    }
  }, [isLogin]);
  const handleLogin = () => {
    if (isLogin !== "Login") {
      navigate("/my-account");
    } else {
      navigate("/user/login");
    }
  };
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };
  const CustomTypography = styled(Typography)({
    fontWeight: 700,
    cursor: "pointer",
    color: "White",
    "&:hover": {
      color: "#c39447",
    },
    "&:active": {
      color: "#c39447",
    },
  });
  return (
    <Stack
  direction="row"
  sx={{
    bgcolor: "#FFFFFF",
    display: "flex",
    // position: "absolute",
    top: 0,
    zIndex: 100,
  }}


    >
      {isAboveLgScreen ? (
        <Stack
          direction="row"
          sx={{
            display: "flex",
            bgcolor: "#262626",
            justifyContent: "space-around",
            alignItems: "center",
            height: "85px",
            width: "1472px",
            padding: 0,
            position: "fixed",
            top: 0,
            marginRight: "100px",
            zIndex: 100,
          }}
        >
          <Stack>
            <Box
              component="img"
              src={tingtone}
              alt=""
              style={{
                height: "150px",
                width: { xs: 35, sm: 45, md: 55 },
                marginLeft: { xs: 1, sm: 2 },
              }}
            />
          </Stack>

          <CustomTypography
            onClick={() => navigate("/")}
            sx={{ fontWeight: 700 }}
          >
            Home
          </CustomTypography>
          <CustomTypography
            onClick={() => navigate("/about")}
            sx={{ fontWeight: 700 }}
          >
            About
          </CustomTypography>
          <CustomTypography sx={{ fontWeight: 700 }}>Classes</CustomTypography>
          <CustomTypography sx={{ fontWeight: 700 }}>Teachers</CustomTypography>
          <CustomTypography sx={{ fontWeight: 700 }}>Careers</CustomTypography>
          <CustomTypography sx={{ fontWeight: 700 }}>Contact</CustomTypography>
          <CustomTypography
            onClick={() => navigate("/user/login")}
            sx={{ fontWeight: 700 }}
          >
            {isLogin}
          </CustomTypography>
        </Stack>
      ) : (
        <Box>
          <IconButton
            edge="start"
            color="secondary"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon fontSize="large" sx={{ marginTop: 3 }} />
          </IconButton>
          <Drawer
            anchor="left"
            PaperProps={{
              sx: {
                backgroundColor: "white",
                color: "black",
              },
            }}
            open={open}
            onClose={toggleDrawer(false)}
          >
            <Box
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List
                sx={{
                  width: 300,
                  paddingLeft: 3,
                  paddingY: 2,
                }}
              >
                <ListItem>
                  <HomeIcon sx={{ marginRight: 2 }} />
                  <ListItemText onClick={() => navigate("/")} primary="Home" />
                </ListItem>
                <ListItem>
                  <InfoIcon sx={{ marginRight: 2 }} />
                  <ListItemText
                    onClick={() => navigate("/about")}
                    primary="About"
                  />
                </ListItem>
                <ListItem>
                  <ClassIcon sx={{ marginRight: 2 }} />
                  <ListItemText primary="Classes" />
                </ListItem>
                <ListItem>
                  <Diversity3Icon sx={{ marginRight: 2 }} />
                  <ListItemText primary="Teachers" />
                </ListItem>
                <ListItem>
                  <NightlifeIcon sx={{ marginRight: 2 }} />
                  <ListItemText primary="Careers" />
                </ListItem>
                <ListItem>
                  <ConnectWithoutContactIcon sx={{ marginRight: 2 }} />
                  <ListItemText primary="Contact" />
                </ListItem>
                <ListItem>
                  <PersonIcon sx={{ marginRight: 2 }} />
                  <ListItemText onClick={handleLogin} primary={isLogin} />
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </Box>
      )}
    </Stack>
  );
};

export default Header;
