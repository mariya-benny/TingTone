import React from "react";
import AboutImage from "../../assets/about.jpg";
import { Box, Stack,useMediaQuery, Typography,Grid } from "@mui/material";
import CEO from "../../assets/CEO.jpg"
import Director from "../../assets/Director.jpg"
import Associate from "../../assets/teach2.jpg"
import Teacher from "../../assets/teach3.jpg"
import Teacher1 from "../../assets/teach4.jpg"
import Teacher2 from "../../assets/teach1.jpg"
import Overview from "../../assets/overview.jpg"
const AboutComponent = () => {
    const isAboveLgScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
    const team=[{post:CEO,name:'Sam Clarke'},{post:Director,name:'Kate McMillan'},{post:Associate,name:'John Thompson'},{post:Teacher,name:'Trivian Lan'},{post:Teacher1,name:'Mary Williams'},{post:Teacher2,name:'Peter Smith'}]
    return (
        <>
           <Typography
                sx={{marginTop:15,marginLeft:80,marginBottom:2}}
                    variant="h4"
                    color="black"
                    fontWeight={{ xs: 900 }}
                    // mt={{ xs: 1, sm: 1.3, md: 1.6, lg: 3 }}
                    //  mb={{ xs: 1, sm: 1.3, md: 1.6, lg: 3 }}  
            
                >
                    ABOUT US
                </Typography>
            <Stack direction="column" bgcolor="warning.main" marginX={{xs:3,sm:5,md:7,lg:5}}>
            
                
                {isAboveLgScreen&&<Box
                    component="img"
                    src={AboutImage}
                    alt="About-image"
                    height="auto"
                    minWidth={{md:500}}
                    
                />}
            </Stack>
            <Stack direction='row' bgcolor='white' xs={12} sm={6}  sx={{  position:'relative', marginTop:{xs:1,sm:1.5,md:2.3,lg:3.5}}}padding={5}>
    <Box component="img"
        src={Overview}
        alt="banner-main"
        sx={{
            height:"auto",
            maxWidth:{xs:500,sm:450,md:700,lg:800},
           
           
          }}
      />
      <Stack bgcolor='white'sx={{position:'absolute',top:{xs:60,sm:180},
      borderTopRightRadius:50,borderBottomRightRadius:50}}padding={1} >
      </Stack>
           <Stack> 
          
           <Typography variant='h3' fontWeight={700} sx={{marginLeft:35,marginTop:8}} color='black'>OverView</Typography>
           
          
           
           <Typography variant='subtitle1' fontWeight={700} marginX={3} color='black' padding={7}>Welcome to our music instrument learning class! In this class, we will explore the wonderful world of music and learn to play a variety of instruments. Whether you are a beginner or an experienced musician, our classes are designed to help you improve your skills and develop a deeper understanding of music.
          </Typography>
           </Stack>
    </Stack>
            <Stack
                direction="row"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h4"
                    color="black"
                    fontWeight={{ xs: 700 }}
                    mt={{ xs: 1, sm: 1.3, md: 1.6, lg: 3 }}
                    mb={{ xs: 1, sm: 1.3, md: 1.6, lg: 3 }}
                >
                  Who we are
                </Typography>
            </Stack>
            <Grid sm={6} lg={3} >
                {team.map((person,index)=>{
                   
                   
                   return<Box key={index} component="img"
                   src={person.post}
                   alt="person"
                   sx={{
                       height:"auto",
                       maxWidth: '30%',
                       marginTop:{xs:1,sm:1.5,md:2,lg:3},
                       marginX:{xs:1,sm:1.5,md:2}
                     }}paddingLeft={8}
                 />
                            
                })}
            </Grid>
        </>
    );
};

export default AboutComponent;