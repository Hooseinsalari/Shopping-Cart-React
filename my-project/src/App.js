import React from 'react';
// import "./App.css";

import MainPage from './components/MainPage';

import ProductsContextProvider from './context/ProductsContextProvider';

const App = () => {
    return (
        <ProductsContextProvider>
            <MainPage />            
        </ProductsContextProvider>
    );
};

export default App;