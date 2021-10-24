import React, { createContext, useReducer } from 'react';

const initialState = {
    selectedItem: [],
    itemCounter:0,
    total:0,
    checkout:false
}

const cartReducer = (state, action) => {
    switch(action.type) {
        case "ADD_ITEM":
            if (!state.selectedItem.find(item => item.id === action.payload.id)) {
                state.selectedItem.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state, 
                selectedItem: [...state.selectedItem]
            }
        case "REMOVE_ITEM":
            const newSelectedItem = state.selectedItem.filter(item => item.id !== action.payload.id)
            return {
                ...state, 
                selectedItem: [...newSelectedItem]
            }
        
        case "INCREASE":
            const indexIncrease = state.selectedItem.findIndex(item => item === action.payload.id)
            state.selectedItem[indexIncrease].quantity++;
            return {
                ...state
            }

        case "DECREASE":
            const indexDecrease = state.selectedItem.findIndex(item => item === action.payload.id)
            state.selectedItem[indexDecrease].quantity--;
            return {
                ...state
            }

        case "CHECK_OUT":
            return {
                selectedItem: [],
                itemCounter:0,
                total:0,
                checkout:true
            }

        case "CLEAR":
            return {
                selectedItem: [],
                itemCounter:0,
                total:0,
                checkout:false
            }

        default:
            return state
    }
}

export const CartContext  = createContext();

const CartContextProvider = ({children}) => {

    const [state, disPatch] = useReducer(cartReducer, initialState)

    return (
        <CartContext.Provider value={{state, disPatch}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;