import React, {useContext} from 'react';

import { Link } from 'react-router-dom';

// context
import {ProductsContext} from '../context/ProductsContextProvider';

const ProductsDetails = (props) => {
    const id = props.match.params.id;
    const data = useContext(ProductsContext);
    const product = data[id-1];
    const {image, title, description, price, category} = product;
    return (
        <div>
            <img src={image} alt="product" />
            <h2>{title}</h2>
            <p>{description}</p>
            <p><span>Category:</span> {category}</p>
            <div>
                <p>price: {price}</p>
                <Link to="/product">Back to shop</Link>
            </div>
        </div>
    );
};

export default ProductsDetails;