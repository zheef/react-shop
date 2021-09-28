import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import StoreContext from './context/store';
import productsStore from './store/products';
import contactsStore from './store/contacts';
import cartStore from './store/cart';

let store = {
    products: productsStore,
    contacts: contactsStore,
    cart: cartStore
};

ReactDom.render(
    <StoreContext.Provider value={store}>
        <App />
    </StoreContext.Provider>,
    document.querySelector('#root')
);