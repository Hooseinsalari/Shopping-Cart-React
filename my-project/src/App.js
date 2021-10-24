import React from 'react';
// import "./App.css";
import { Switch , Redirect, Route } from 'react-router-dom';

import MainPage from './components/MainPage';
import ProductsDetails from './components/ProductsDetails';

import ProductsContextProvider from './context/ProductsContextProvider';

const App = () => {
    return (
        <ProductsContextProvider>
            <Switch>
                <Route path="/product/:id" component={ProductsDetails} />
                <Route path="/product" component={MainPage} />
                <Redirect to="/product" />
            </Switch>
        </ProductsContextProvider>
    );
};

export default App;