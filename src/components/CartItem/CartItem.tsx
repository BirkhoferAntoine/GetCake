import {type FC} from "react";
import { CartItemType } from '../../store/cart-slice.ts';
import { Box, MenuItem } from '@mui/material';

type CartItemProps = {
    product: CartItemType;
};

const sxStyles = {

}

const CartItem: FC<CartItemProps> = ({product}) => {
    return (
        <MenuItem>
            <Box>{product.title} x {product.price}</Box>
        </MenuItem>
    );
};

export default CartItem;