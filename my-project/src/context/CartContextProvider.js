import React, { createContext, useReducer } from 'react';

const initialState = {
    selectedItem: [],
    itemCounter:0,
    total:0,
    checkout:false
}

const sumItems = (items) => {
    const itemCounter = items.reduce((total, product) => total + product.quantity, 0);
    const total = items.reduce((total, product) => total + product.quantity * product.price, 0).toFixed(2);
    return {itemCounter, total}
}

const cartReducer = (state, action) => {
    console.log(state)
    switch(action.type) {
        case "ADD_ITEM":
            if (!state.selectedItem.find(item => item.id === action.payload.id)) {
                state.selectedItem.push({
                    ...action.payload,
                    quantity: 1,
                    
                })
            }
            return {
                ...state, 
                selectedItem: [...state.selectedItem],
                ...sumItems(state.selectedItem),
                checkout:false
            }
        case "REMOVE_ITEM":
            const newSelectedItem = state.selectedItem.filter(item => item.id !== action.payload.id)
            return {
                ...state, 
                selectedItem: [...newSelectedItem],
                ...sumItems(newSelectedItem)
            }
        
        case "INCREASE":
            const indexIncrease = state.selectedItem.findIndex(item => item.id === action.payload.id)
            state.selectedItem[indexIncrease].quantity++;
            return {
                ...state,
                ...sumItems(state.selectedItem)
            }

        case "DECREASE":
            const indexDecrease = state.selectedItem.findIndex(item => item.id === action.payload.id)
            state.selectedItem[indexDecrease].quantity--;
            return {
                ...state,
                ...sumItems(state.selectedItem)
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