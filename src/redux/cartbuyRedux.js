import { createSlice } from '@reduxjs/toolkit';



const cartBuySlice = createSlice ({
    name: "productbuy",
    initialState: {
        productbuy: []
       
    },
    reducers: {
        addBuyProduct(state, action) {
            const itemInCart = state.productbuy.find((item) => item.id === action.payload.id && item.src === action.payload.src && item.size === action.payload.size);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.productbuy.push({...action.payload});
            }

        },
        incProduct(state, action) {
            const exist = state.productbuy.find((item) => item.id === action.payload[0].id && item.src === action.payload[0].src && item.size === action.payload[0].size);
            if(exist) {
                exist.quantity = exist.quantity + 1;
            }
        },
        decProduct(state, action) {
            const exist = state.productbuy.find((item) => item.id === action.payload[0].id && item.src === action.payload[0].src && item.size === action.payload[0].size);
            if(exist) {
                if (exist.quantity > 1) {
                    exist.quantity--;
                }
                else {
                    state.productbuy.map((x,index) => (
                        x.index = index)
                        )
                    state.productbuy.splice(action.payload[0].index, 1);
                    
                }
            }
        },
        removeItem(state, action) {
            state.productbuy.map((x,index) => (
                x.index = index)
                )
            if(state.productbuy.length === 1) {
                state.productbuy = [];
            }
            state.productbuy.splice(action.payload[0].index, 1);
            state.productbuy =  state.productbuy;
        }
    }
});



export const { addBuyProduct, incProduct, decProduct, removeItem } = cartBuySlice.actions;

export default cartBuySlice.reducer;
