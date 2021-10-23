import React from 'react';
import "./App.css";

import ProductsContextProvider from './context/ProductsContextProvider';

const App = () => {
    return (
        <ProductsContextProvider>
            <div className="App">
                asd
            </div>
        </ProductsContextProvider>
    );
};

export default App;