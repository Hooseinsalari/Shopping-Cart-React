import React, {useContext} from 'react';

// Context
import { CartContext } from '../../context/CartContextProvider';

// Function
import { shortTitle } from '../../helper/function';

// icon
import trashIcon from "../../icon/trash.svg";

import styles from "./Cart.module.css"

const Cart = (props) => {

    const { disPatch } = useContext(CartContext);
 
    const { image, title, quantity, price } = props.data;

    return (
        <div className={styles.container}>
            <img className={styles.proimage} src={image} alt="product" />
            <div className={styles.titlePrice}>
                <h3>{shortTitle(title)}</h3>
                <p>{price} $</p>
            </div>
            <h3 className={styles.quantity}>{quantity}</h3>

            <div className={styles.buttons}>
            {
                quantity > 1 ?
                <button className={styles.decreaseBtn} onClick={() => disPatch({type: "DECREASE", payload: props.data})}>-</button>:
                <button className={styles.removeBtn} onClick={() => disPatch({type: "REMOVE_ITEM", payload: props.data})}><img src={trashIcon} alt="trash" style={{width:"16px"}}/></button>
            }

            <button className={styles.addBtn} onClick={() => disPatch({type: "INCREASE", payload:props.data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;