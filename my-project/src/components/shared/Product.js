import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// helper function
import { shortTitle, isInCart, quantityCount } from '../../helper/function';

// Context
import { CartContext } from '../../context/CartContextProvider'; 

import trashIcon from "../../icon/trash.svg"

const Product = ({productData}) => {

    const { state, disPatch } = useContext(CartContext)

    return (
        <div>
            <img src={productData.image} alt="product" style={{width:"300px" , height:"300px"}}/>
            <h3>{shortTitle(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                
                <Link to={`/product/${productData.id}`}>details</Link>
                <div>
                    {quantityCount(state, productData.id) > 1 && <button onClick={() => disPatch({type:"DECREASE", payload: productData})}>-</button>}
                    {quantityCount(state, productData.id) === 1 && <button onClick={() => disPatch({type:"REMOVE_ITEM", payload: productData})}><img src={trashIcon} alt="trash" style={{width:"15px"}} /></button>}
                    {
                        isInCart(state, productData.id) ?
                        <button onClick={() => disPatch({type:"INCREASE" , payload:productData})}>+</button>:
                        <button onClick={() => disPatch({type:"ADD_ITEM", payload:productData})}>Add to cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;