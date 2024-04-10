import { Box, Container } from '@mui/material';
import HeroSection from "../../components/HeroSection/HeroSection.tsx";
import {sxStyles} from "./Homepage.styles.ts";
import ProductsList from "../../components/ProductsList/ProductsList.tsx";

const Homepage = () => {
    return (
        <Box sx={sxStyles.container}>
            <HeroSection/>
            <Container>
                <ProductsList/>
            </Container>
        </Box>
    )
}

export default Homepage;