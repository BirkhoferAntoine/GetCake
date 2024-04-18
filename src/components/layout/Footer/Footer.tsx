import { AppBar, Box, Fab, IconButton, Toolbar, Typography } from '@mui/material';
import {type FC} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import SocialBar from '../SocialBar/SocialBar.tsx';

const sxStyles = {
    appBar: {
        top: 'auto',
        bottom: 0,
        boxShadow: 'none'
    }
}


const Footer: FC = () => {
    return (
        <AppBar position="fixed" color="transparent" sx={sxStyles.appBar} component={'footer'}>
            <Toolbar>
                <Box sx={{flexGrow:1}}/>
                <Typography color={'text.secondary'}>Made with 💖 by Antoine Birkhofer</Typography>
                <SocialBar />
            </Toolbar>
        </AppBar>
    );
};

export default Footer;