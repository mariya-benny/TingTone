import React from "react";
import {
    Stack,
    List,
    ListItem,
    ListItemText,
    Typography,
    useMediaQuery,
    Drawer,
    Box,
} from "@mui/material";
import GridViewIcon from '@mui/icons-material/GridView';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import LogoutIcon from "@mui/icons-material/Logout";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router";
const TrainerHome = () => {
  const navigate=useNavigate()
    const isAboveLgScreen = useMediaQuery((theme) =>
        theme.breakpoints.up("lg")
    );
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
    const signOut=()=>{
      localStorage.removeItem('Admintoken')
      navigate('/trainer')
    }
    return (
        <>
            {isAboveLgScreen ? (
                <Stack
                    sx={{
                        bgcolor: "#262626",
                        maxWidth: 260,
                        height: "91vh",
                        color: "white",
                       
                        padding: 4,
                    }}
                >
                    <Typography
                        variant="h5"
                        color="#c39447"
                        sx={{ marginLeft: 2, fontWeight: 700 }}
                    >
                        TingTone
                    </Typography>

                    <List sx={{ marginTop: 5 }}>
                        <ListItem sx={{'&:hover':{
                          color:'#c39447',
                          cursor:'pointer'
                        }}}
                        onClick={()=>navigate('/trainer/trainer-dashboard')}
                        >
                            <GridViewIcon sx={{ marginRight: 2 }} />
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                        <ListItem sx={{'&:hover':{
                          color:'#c39447',
                          cursor:'pointer'
                        }}}
                        onClick={()=>navigate('/trainer/trainer-students')}>
                            <Diversity3OutlinedIcon sx={{ marginRight: 2 }} />
                            <ListItemText primary="Students" />
                        </ListItem >
                        <ListItem sx={{'&:hover':{
                          color:'#c39447',
                          cursor:'pointer'
                        }}}onClick={()=>navigate('/trainer/trainer-bookings')}>
                            <LocalPhoneOutlinedIcon sx={{ marginRight: 2 }} />
                            <ListItemText primary="Bookings" />
                        </ListItem>
                        <ListItem sx={{'&:hover':{
                          color:'#c39447',
                          cursor:'pointer'
                        }}} onClick={()=>navigate('/trainer/trainer-videos')}>
                            <ViewCarouselIcon sx={{ marginRight: 2 }} />
                            <ListItemText primary="Videos" />
                        </ListItem>
                        <ListItem sx={{'&:hover':{
                          color:'#c39447',
                          cursor:'pointer'
                        }}} onClick={signOut}>
                            <LogoutIcon sx={{ marginRight: 2 }} />
                            <ListItemText primary="Sign out" />
                        </ListItem>
                    </List>
                </Stack>
            ) : (
                <Box>
                    <IconButton
                        edge="start"
                        color="#262626"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon fontSize="large" sx={{ marginTop: 3 }} />
                    </IconButton>
                    <Drawer
                        anchor="left"
                        PaperProps={{
                            sx: {
                                backgroundColor: "#262626",
                                color: "White",
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
                                <ListItem  onClick={()=>navigate('/trainer/trainer-dashboard')}>
                                    <GridViewIcon sx={{ marginRight: 2 }} />
                                    <ListItemText primary="Dashboard" />
                                </ListItem>
                                <ListItem onClick={()=>navigate('/trainer/trainer-students')}>
                                    <Diversity3OutlinedIcon
                                        sx={{ marginRight: 2 }}
                                    />
                                    <ListItemText primary="Students" />
                                </ListItem>
                                <ListItem onClick={()=>navigate('/trainer/trainer-bookings')}>
                                    <LocalPhoneOutlinedIcon sx={{ marginRight: 2 }} />
                                    <ListItemText primary="Bookings" />
                                </ListItem>
                                <ListItem onClick={()=>navigate('/trainer/trainer-videos')}>
                                    <ViewCarouselIcon sx={{ marginRight: 2 }} />
                                    <ListItemText primary="Videos" />
                                </ListItem>
                                <ListItem onClick={signOut}>
                                    <LogoutIcon sx={{ marginRight: 2 }} />
                                    <ListItemText primary="Sign out" />
                                </ListItem>
                            </List>{" "}
                        </Box>
                    </Drawer>
                </Box>
            )}
            <Stack 
                sx={{
                    bgcolor: "#262626",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    pb: 3,
                }}
            >
                <Typography variant="body1" color="#c39447" paddingTop={2}>
                    {"Copyright © "}
                    TingTone {new Date().getFullYear()}
                </Typography>
            </Stack>
        </>
    );
};

export default TrainerHome;
