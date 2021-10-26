import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Cart from "./shared/Cart";

// Context
import { CartContext } from '../context/CartContextProvider';

import styles from "./ShopCart.module.css";

const ShopCart = () => {

    const {state, disPatch} = useContext(CartContext);

    return (
        <div className={styles.con}>
            <div className={styles.container}>

                {
                    state.itemCounter > 0 && <div>
                        <p className={styles.totalItems}><span>Total Items: </span>{state.itemCounter}</p>
                        <p className={styles.totalPayment}><span>Total Payment: </span>{state.total}</p>
                        <div className={styles.buttons}>
                            <button className={styles.checkoutBtn} onClick={() => disPatch({type:"CHECK_OUT"})}>Check out</button>
                            <button className={styles.clearBtn} onClick={() => disPatch({type:"CLEAR"})}>Clear</button>
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
            {
                state.selectedItem.map(item => <Cart key={item.id} data={item} /> )
            }
        </div>
    );
};

export default ShopCart;