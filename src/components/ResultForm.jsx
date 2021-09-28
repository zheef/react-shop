import React, {useContext} from 'react';
import StoreContext from '../context/store';
import {observer} from 'mobx-react-lite';

function ResultForm() {
    let {products, contacts} = useContext(StoreContext);
    let {products_sum} = products;
    let {username, email, phone} = contacts;
    return (
        <div>
            <h1>{username}, спасибо за заказ!</h1>
            <h3>Сумма заказа: {products_sum} руб.</h3>
            <h3>Email: {email}</h3>
            <h3>Телефон: {phone}</h3>
        </div>
    );
}

export default observer(ResultForm);