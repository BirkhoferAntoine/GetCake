import { Box, Typography } from '@mui/material';
import {sxStyles} from "./HeroSection.styles.ts";


const HeroSection = () => {
    return (
        <Box sx={sxStyles.headerContainer} component={'section'}>
            <video style={sxStyles.video} autoPlay muted loop>
                {/*<source src={"https://res.cloudinary.com/dcyzs6uiu/video/upload/v1712753401/hril6rpie9bqt5gc82xw.mp4"}/>*/}
            </video>
            <Typography variant={'h1'} sx={sxStyles.headerTypo}>Get Cake, Now!</Typography>
        </Box>
    );
};

export default HeroSection;