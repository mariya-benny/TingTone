import { Box ,Avatar, Typography,Stack} from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import AvatarImage from "../../assets/testimonial2.jpg"
const Testimonials = () => {
    const items =[{name:'Albert Webb',image:AvatarImage,description:' I began as adult student that never had any musical training. Your teachers spent time to understand my objectives and even gave me one trial lesson. It became a great beginning of my piano class.'}]
    const Slide=(value)=>{
        
        return <Box sx={{ display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        marginY:0.7,
        padding:3
        }}>
                            <Avatar src={AvatarImage} sx={{height:100,width:100}}/>
                            <Typography variant='h6'color='black'fontWeight={{xs:600}} >{value.value.name}</Typography>
                            <Typography variant='subtitle1'color='black' fontWeight={{xs:600}} sx={{marginX:{xs:3,sm:5,md:30,lg:30}}}>{value.value.description}</Typography>
        </Box>
    }
  return (
    <>
            <Stack direction='row' sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Typography variant='h4' color='black' fontWeight={{xs:600}} mt={{xs:1,sm:1.3,md:1.6,lg:3}}>Testimonials</Typography>
        </Stack>
      <Carousel>
        {items.map((content,index)=><Slide key={index} value={content}/>)}
      </Carousel>
    </>
  )
}

export default Testimonials