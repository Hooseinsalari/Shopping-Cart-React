import React, {useEffect, useState, createContext} from 'react';

// API
import { getProducts } from '../service/Api';

const ProductsContext = createContext();

const ProductsContextProvider = (props) => {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts())
        }

        fetchAPI();
    }, [])

    return (
        <ProductsContext.Provider value={products} >
            {console.log(props.children)}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;