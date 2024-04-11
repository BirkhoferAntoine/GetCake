import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type CartItemType = {
    id: string;
    title: string;
    price: number;
    quantity: number;
}

type CartState = {
    items: CartItemType[]
}

const initialState: CartState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'productsCart',
    initialState,
    reducers : {
        addToCart(
            state,
            action: PayloadAction<{ id: string, title: string, price: number }>
        ) {
            const itemIndex = state.items.findIndex((item) => {
                return item.id === action.payload.id;
            });
            if (itemIndex >= 0) {
                state.items[itemIndex].quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart(
            state,
            action: PayloadAction<string>
        ) {
            //const itemIndex = state.items.findIndex(item => item.id === action.payload);
            const itemIndex = state.items.findIndex(item => {
                console.log("=>(cart-slice.ts:42) state", state);
                console.log("=>(cart-slice.ts:42) item.id, action.payload", item.id, action.payload);
                return item.id === action.payload;
            });
            if (itemIndex >= 0) {
                if (state.items[itemIndex].quantity > 1) {
                    state.items[itemIndex].quantity--;
                } else {
                    state.items.splice(itemIndex, 1)
                }
            }
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;