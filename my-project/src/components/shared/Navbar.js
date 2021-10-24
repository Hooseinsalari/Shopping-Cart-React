import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContextProvider';

import cartImg from "../../icon/cart.svg";

const Navbar = () => {
    const {state} = useContext(CartContext)

    return (
        <div>
            <Link to="/product">products</Link>
            <div>
                <Link to="/cart"><img src={cartImg} alt="cart" style={{width:"20px"}}/></Link>
                <span>{state.itemCounter}</span>
            </div>
        </div>
    );
};

export default Navbar;