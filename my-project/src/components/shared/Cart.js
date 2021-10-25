import React, {useContext} from 'react';

// Context
import { CartContext } from '../../context/CartContextProvider';

// Function
import { shortTitle } from '../../helper/function';

// icon
import trashIcon from "../../icon/trash.svg";

const Cart = (props) => {

    const { disPatch } = useContext(CartContext);
 
    const { image, title, quantity, price } = props.data;

    return (
        <div>
            <img src={image} alt="product" />
            <div>
                <h3>{shortTitle(title)}</h3>
                <p>{price} $</p>
            </div>
            <h3>{quantity}</h3>

            {
                quantity > 1 ?
                <button onClick={() => disPatch({type: "DECREASE", payload: props.data})}>-</button>:
                <button onClick={() => disPatch({type: "REMOVE_ITEM", payload: props.data})}><img src={trashIcon} alt="trash" style={{width:"20px"}}/></button>
            }

            <button onClick={() => disPatch({type: "INCREASE", payload:props.data})}>+</button>
        </div>
    );
};

export default Cart;