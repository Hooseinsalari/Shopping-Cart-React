import React from 'react';
// import "./App.css";
import { Switch , Redirect, Route } from 'react-router-dom';

// Components
import MainPage from './components/MainPage';
import ProductsDetails from './components/ProductsDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';

import ProductsContextProvider from './context/ProductsContextProvider';
import CartContextProvider from './context/CartContextProvider';

const App = () => {
    return (
        <ProductsContextProvider>
            <CartContextProvider>
                <Navbar />
                <Switch>
                    <Route path="/product/:id" component={ProductsDetails} />
                    <Route path="/product" component={MainPage} />
                    <Route path="/cart" component={ShopCart} />
                    <Redirect to="/product" />
                </Switch>
            </CartContextProvider>
        </ProductsContextProvider>
    );
};

export default App;