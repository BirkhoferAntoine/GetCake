import {type FC} from "react";
import { Menu, MenuItem } from '@mui/material';
import { useCartDispatch, useCartSelector } from '../../store/hooks.ts';
import CartItem from '../CartItem/CartItem.tsx';

type CartItemsListProps = {
    anchorEl: HTMLElement | null;
    onCloseCart: () => void;
}

const sxStyles = {

}

const CartItemsList: FC<CartItemsListProps> = ({anchorEl, onCloseCart}) => {
    const cartItems = useCartSelector(state => state.productsCart.items);
    const dispatch = useCartDispatch();
    const totalPrice = cartItems.reduce(
        (prevValue, item) => prevValue + item.price * item.quantity, 0
    );

    return (
        <Menu
            id="cart-menu"
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={onCloseCart}
        >
            {cartItems.map(item => {
                return (<CartItem product={item} />)
            })}
            <MenuItem onClick={onCloseCart}>Close</MenuItem>
        </Menu>
    );
};

export default CartItemsList;