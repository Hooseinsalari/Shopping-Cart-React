import React from 'react';
import { Link } from 'react-router-dom';

import { shortTitle } from '../../helper/function';

const Product = ({productData}) => {
    return (
        <div>
            <img src={productData.image} alt="product" style={{width:"300px" , height:"300px"}}/>
            <h3>{shortTitle(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                
                <Link to={`/product/${productData.id}`}>details</Link>
                <div>
                    <button>click</button>
                </div>
            </div>
        </div>
    );
};

export default Product;