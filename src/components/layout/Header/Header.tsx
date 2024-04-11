import { AppBar, Box, Button, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { sxStyles } from './Header.styles.ts';
import logo from '/src/assets/icons8-cake-64.png';
import React, { useState } from 'react';
import { useCartSelector } from '../../../store/hooks.ts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartItemsList from '../../CartItemsList/CartItemsList.tsx';



export const Header = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement| null>(null);
    const cartQuantity = useCartSelector(state => {
        return state.productsCart.items.reduce((prevValue, item) => prevValue + item.quantity, 0 )
    });


    function handleCloseCart() {
        setAnchorEl(null);
    }

    function handleCart(event: React.MouseEvent<HTMLElement>) {
        setAnchorEl(event.currentTarget);
    }


    return (
        <AppBar position="fixed" sx={sxStyles.appBar}>
            <Toolbar sx={{display:'flex'}}>
                <Link to={'/'} style={{display:'flex', alignItems: 'center'}}>
                    <Box sx={sxStyles.logoContainer}>
                        <img src={logo}/>
                    </Box>
                    <Box sx={sxStyles.logoText}>
                        <Typography variant={'h5'}>Get Cake</Typography>
                    </Box>
                </Link>
                <Box sx={{flexGrow:'1', display: 'flex', justifyContent: 'flex-end'}}>
                    <Button
                        size="large"
                        aria-label="cart of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleCart}
                    >
                        <ShoppingCartIcon /> {cartQuantity}
                    </Button>
                    <CartItemsList anchorEl={anchorEl} onCloseCart={handleCloseCart}/>
                </Box>
            </Toolbar>
        </AppBar>
    );
}