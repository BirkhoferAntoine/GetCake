import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { sxStyles } from './Header.styles.ts';



export const Header = () => {
    return (
        <AppBar position="fixed" sx={sxStyles.appBar}>
            <Toolbar >
                <Link to={'/'} style={{display:'flex', alignItems: 'center'}}>
                    <Box sx={sxStyles.logoContainer}>
                        <img src={'icons8-cake-64.png'}/>
                    </Box>
                    <Box sx={sxStyles.logoText}>
                        <Typography variant={'h5'}>Get Cake</Typography>
                    </Box>
                </Link>
            </Toolbar>
        </AppBar>
    );
}