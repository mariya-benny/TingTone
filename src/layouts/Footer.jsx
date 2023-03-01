import React from "react";
import { Stack } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import tingtone from "../assets/TingTone.png";
import { Box } from "@mui/system";
const Footer = () => {
    const isAboveLgScreen = useMediaQuery((theme) =>
        theme.breakpoints.up("lg")
    );
    return (
        <>
            <Stack
                sx={{
                    bgcolor: "#262626",
                    padding: 3,
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: 6,
                }}
                direction={isAboveLgScreen ? "row" : "column"}
            >
                <Stack>
                    <Typography
                        sx={{ fontWeight: 700, lineHeight: 2.3 }}
                        color="#a8a5a2"
                    >
                        Curious about how we teach music?
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="#a8a5a2"
                    >
                        Contact Us
                    </Typography>
                    {isAboveLgScreen && (
                        <Box
                            component="img"
                            src={tingtone}
                            alt="Example"
                            sx={{
                                height: "auto",
                                width: { xs: 35, sm: 45, md: 55 },
                            }}
                        />
                    )}
                </Stack>
                {!isAboveLgScreen && (
                    <Divider color="#C0EEF2" sx={{ marginY: 1.5 }} />
                )}
               
                {!isAboveLgScreen &&
                     (
                    <Divider color="#C0EEF2" sx={{ marginY: 1.5 }} />
                )}
                <Stack>
                    <Typography
                        sx={{ fontWeight: 700, lineHeight: 2.3 }}
                        color="#a8a5a2"
                    >
                        Important Links
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="#a8a5a2"
                    >
                        Student Login
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="#a8a5a2"
                    >
                        Teacher Login
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="#a8a5a2"
                    >
                        Register
                    </Typography>
                </Stack>
                {!isAboveLgScreen && (
                    <Divider color="#C0EEF2" sx={{ marginY: 1.5 }} />
                )}
                <Stack>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="#a8a5a2"
                    >
                        More
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="#a8a5a2"
                    >
                        Help
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="#a8a5a2"
                    >
                        Privacy Policy
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="#a8a5a2"
                    >
                        Terms & Conditions
                    </Typography>
                </Stack>
                {!isAboveLgScreen &&
                    
                   (
                    <Divider color="#C0EEF2" sx={{ marginY: 1.5 }} />
                )}
                <Stack>
                    <Typography
                        sx={{ fontWeight: 700, lineHeight: 2.3 }}
                        color="#a8a5a2"
                    >
                        Social Media
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="#a8a5a2"
                    >
                        Facebook
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="#a8a5a2"
                    >
                        Twitter
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="#a8a5a2"
                    >
                        LinkedIn
                    </Typography>
                    <Typography
                        sx={{ fontWeight: 500, lineHeight: 2.3 }}
                        color="#a8a5a2"
                    >
                        YouTube
                    </Typography>
                </Stack>
                {!isAboveLgScreen&&(
                    <Stack
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        direction="row"
                    >
                        <Box
                            component="img"
                            src={tingtone}
                            alt="Example"
                            sx={{
                                height: "auto",
                                width: { xs: 35, sm: 45, md: 55 },
                                marginLeft: 3,
                            }}
                        />
                        <Typography
                            variant="body2"
                            color="#a8a5a2"
                            sx={{ mt: 1.3, marginLeft: 3 }}
                        >
                            {"Copyright © "}
                            TingTone {new Date().getFullYear()}
                        </Typography>
                    </Stack>
                )
                    
              }
            </Stack>
            {isAboveLgScreen &&(
                <Stack
                    sx={{
                        bgcolor: "#262626",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        pb: 3,
                    }}
                >
                    <Typography variant="body2" color="#a8a5a2">
                        {"Copyright © "}
                        TingTone {new Date().getFullYear()}
                    </Typography>
                </Stack>
            )
                
            }
        </>
    );
};

export default Footer;
