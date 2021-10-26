import React, {useContext} from 'react';

import Product from './shared/Product';

// Context
import { ProductsContext } from '../context/ProductsContextProvider';

import styles from "./MainPage.module.css";

const MainPage = () => {

    const products = useContext(ProductsContext);

    return (
        <div className={styles.container} >
            {
                products.map((product) => <Product key={product.id} productData={product} />)
            }
        </div>
    );
};

export default MainPage;