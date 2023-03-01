import { Box } from '@mui/system'
import Banners from'../../assets/ThirdBanner.jpg'
const ThirdBanner = () => {
  return (
    <>
        <Box component="img"
        src={Banners}
        alt="banner-main"
        sx={{
            height:"auto",
            maxWidth: '100%',
            marginTop:{xs:1,sm:1.5,md:2,lg:3}
          }}
      />
      
    </>
  )
}

export default ThirdBanner