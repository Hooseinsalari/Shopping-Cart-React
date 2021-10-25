import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Cart from "./shared/Cart";

// Context
import { CartContext } from '../context/CartContextProvider';

const ShopCart = () => {

    const {state, disPatch} = useContext(CartContext);

    return (
        <div>
            {
                state.selectedItem.map(item => <Cart key={item.id} data={item} /> )
            }

            {
                state.itemCounter > 0 && <div>
                    <p><span>Total Items: </span>{state.itemCounter}</p>
                    <p><span>Total Payment: </span>{state.total}</p>
                    <div>
                        <button onClick={() => disPatch({type:"CHECK_OUT"})}>Check out</button>
                        <button onClick={() => disPatch({type:"CLEAR"})}>Clear</button>
                    </div>
                </div>
            }

            {
                state.checkout && <div>
                    <h3>Checkout Successfully</h3>
                    <Link to="./product">Buy More</Link>
                </div>
            }

            {
                !state.checkout && state.itemCounter === 0 && <div>
                    <h3>Want to buy?</h3>
                    <Link to="./product">Go to shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;