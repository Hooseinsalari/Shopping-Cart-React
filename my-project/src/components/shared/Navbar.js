import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContextProvider';

import cartImg from "../../icon/cart.svg";

import styles from "./Navbar.module.css";

const Navbar = () => {
    const {state} = useContext(CartContext)

    return (
        <div className={styles.container}>
            <Link to="/product" className={styles.productLink}>products</Link>
            <h2 className={styles.title}>HOSSEIN SHOP</h2>
            <div className={styles.cartContainer}>
                <Link to="/cart"><img src={cartImg} alt="cart" style={{width:"25px"}}/></Link>
                <span>{state.itemCounter}</span>
            </div>
        </div>
    );
};

export default Navbar;