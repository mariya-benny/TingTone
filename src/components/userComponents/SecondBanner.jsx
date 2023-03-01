import React from "react";
import { Stack, Box, Typography, useMediaQuery } from "@mui/material";
import Banner from "../../assets/SecondBanner.jpg";
const SecondBanner = () => {
  const isAboveLgScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  return (
    <>
      {isAboveLgScreen ? (
        <Stack
          direction="row"
          bgcolor="white"
          xs={12}
          sm={6}
          sx={{
            position: "relative",
            marginTop: { xs: 1, sm: 1.5, md: 2.3, lg: 3.5 },
          }}
          padding={5}
        >
          <Box
            component="img"
            src={Banner}
            alt="banner-main"
            sx={{
              height: "auto",
              maxWidth: { xs: 500, sm: 450, md: 700, lg: 800 },
            }}
          />
          <Stack
            bgcolor="white"
            sx={{
              position: "absolute",
              top: { xs: 60, sm: 180 },
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
            }}
            padding={1}
          ></Stack>
          <Stack>
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{ marginLeft: 35, marginTop: 8 }}
              color="black"
            >
              Welcome to TingTone
            </Typography>

            <Typography
              variant="subtitle1"
              fontWeight={700}
              marginX={3}
              color="black"
              padding={7}
            >
              TingTone offers comprehensive musicianship through active learning
              for children and adults. Our music educators are highly qualified
              and share a love of teaching. Our curriculum offers group
              experiences, private lessons, ensemble participation, theater, and
              camps. We believe that learning music can be fun, and we believe
              in the effectiveness of learning in groups.Create unforgettable
              memories with music..
            </Typography>
          </Stack>
        </Stack>
      ) : (
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#c39447",
            marginY: 3,
          }}
        >
          <Typography variant="h6" fontWeight={700} color="#262626">
            Are you a Skilled Musician,
          </Typography>
          <Typography variant="h6" fontWeight={700} color="#262626">
            Want to join with us?
          </Typography>
        </Stack>
      )}
    </>
  );
};

export default SecondBanner;
