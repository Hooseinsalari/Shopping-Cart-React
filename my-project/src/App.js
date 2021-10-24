import React from 'react';
// import "./App.css";
import { Switch , Redirect, Route } from 'react-router-dom';

import MainPage from './components/MainPage';
import ProductsDetails from './components/ProductsDetails';

import ProductsContextProvider from './context/ProductsContextProvider';
import CartContextProvider, {CartContext} from './context/CartContextProvider';

const App = () => {
    return (
        <ProductsContextProvider>
            <CartContextProvider>
                <Switch>
                    <Route path="/product/:id" component={ProductsDetails} />
                    <Route path="/product" component={MainPage} />
                    <Redirect to="/product" />
                </Switch>
            </CartContextProvider>
        </ProductsContextProvider>
    );
};

export default App;