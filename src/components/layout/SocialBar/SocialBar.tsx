import {type FC} from "react";
import { Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

const sxStyles = {
    iconButton: {
        color: 'var(--color-primary)'
    }
}

const SocialBar: FC = () => {
    return (
        <Box>
            <Link to={'https://linkedin.com/in/antoine-birkhofer'}>
                <IconButton sx={sxStyles.iconButton}>
                    <LinkedInIcon/>
                </IconButton>
            </Link>
            <Link to={'https://github.com/birkhoferantoine/getcake'}>
                <IconButton sx={sxStyles.iconButton}>
                    <GitHubIcon/>
                </IconButton>
            </Link>
        </Box>
    );
};

export default SocialBar;