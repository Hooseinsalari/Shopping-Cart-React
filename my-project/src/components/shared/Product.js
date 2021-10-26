import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// helper function
import { shortTitle, isInCart, quantityCount } from '../../helper/function';

// Context
import { CartContext } from '../../context/CartContextProvider'; 

import trashIcon from "../../icon/trash.svg"

import styles from "./Product.module.css";

const Product = ({productData}) => {

    const { state, disPatch } = useContext(CartContext)

    return (
        <div className={styles.container}>
            <img className={styles.proimg} src={productData.image} alt="product"/>
            <h3 className={styles.protitle}>{shortTitle(productData.title)}</h3>
            <p className={styles.proprice}>{productData.price}</p>
            <div className={styles.btnContainer}>
                
                <div className={styles.buttons}>
                    {quantityCount(state, productData.id) > 1 && <button className={styles.decreaseBtn} onClick={() => disPatch({type:"DECREASE", payload: productData})}>-</button>}
                    {quantityCount(state, productData.id) === 1 && <button className={styles.removeBtn} onClick={() => disPatch({type:"REMOVE_ITEM", payload: productData})}><img src={trashIcon} alt="trash" style={{width:"16px"}} /></button>}
                    {quantityCount(state, productData.id) > 0 && <span className={styles.quantity}>{quantityCount(state, productData.id)}</span>}
                    {
                        isInCart(state, productData.id) ?
                        <button className={styles.addBtn} onClick={() => disPatch({type:"INCREASE" , payload:productData})}>+</button>:
                        <button className={styles.addToCartBtn} onClick={() => disPatch({type:"ADD_ITEM", payload:productData})}>Add to cart</button>
                    }
                </div>
            </div>
            <Link className={styles.detailsLink} to={`/product/${productData.id}`}>details</Link>

        </div>
    );
};

export default Product;