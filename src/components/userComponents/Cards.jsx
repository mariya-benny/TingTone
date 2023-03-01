import React,{useState} from 'react'
import { Stack } from '@mui/system'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import  { Card, CardMedia, CardActions, CardContent } from '@mui/material'
import Card1 from "../../assets/Card1.jpg"
import Card2 from "../../assets/Card2.jpg"
import Card3 from "../../assets/Card3.jpg"
import Card4 from "../../assets/Card4.jpg"
const Cards = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
    const cardNames=[ {name:'Kids',image:Card1},{name:'Teens',image:Card2},
    {name:'Adults',image:Card3},{name:'Private Lessons',image:Card4}]
    
  return (
    <>
        <Stack direction='column' sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Typography variant='h5' color='#000' fontWeight={{xs:600}} mt={{xs:1,sm:1.3,md:1.6,lg:2}}>Music Groups</Typography>
            <Typography variant='h6' color='#000' fontWeight={{xs:200}} mt={{xs:1,sm:1.3,md:1.6,lg:2}}>Our music school offers a variety of groups to learn music and sharpen your skills. If you prefer private lessons, we have what to offer you and your children.</Typography>
        </Stack>
        <Grid container sx={{display:'flex',justifyContent:'center'}}  >
          {cardNames.map((value,index)=>{
           return <Grid  xs={12} sm={6} lg={3} item key={index} sx={{borderRadius:5}}>

          <Card
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          sx={{ position: 'relative', margin: '10px', borderRadius:3,bgcolor:'white' }}
        >
           
           <CardMedia
            image={value.image}
            sx={{
              height:{xs:200,sm:250},
              opacity: hoveredIndex === index ? 0.4 : 2,
              
            }}
          />
          
          
      {hoveredIndex === index && (
            <CardActions style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
             
            </CardActions>
          )}
            < CardContent>
          <Typography color="black" variant='h6' fontWeight={{xs:550}} >{value.name}</Typography>
          </CardContent>
           </Card>
            </Grid>
        
    } )} 
           
        </Grid>
    </>
  )
}

export default Cards