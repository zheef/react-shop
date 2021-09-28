import React, {useContext, useState} from "react";
import {useParams} from "react-router-dom";
import StoreContext from '../context/store';
import Count from "./Count";
import {Link, Redirect} from "react-router-dom";
import {toRoute} from '../routes';
import {observer} from "mobx-react-lite";

function Product() {
    let [productInCart, setProductInCart] = useState(false);
    //
    let {products, cart} = useContext(StoreContext);
    let {change, getProductByID} = products;
    let {addProduct} = cart;
    let {id} = useParams();

    if (!id.match(/^[1-9]\d*$/)) {
        return(
            <Redirect to={toRoute('Error404')}/>
        );
    }

    id = parseInt(id);
    let product = getProductByID(id);

    if (!product) {
        return(
            <Redirect to={toRoute('Error404')}/>
        );
    }

    let {id: productId, title, price, rest, count} = product;

    function handleAddClick(product) {
        addProduct(product);
        setProductInCart(true);
    }

    return (
        <div>
            <h1>{title}</h1>
            <div className="my-2">Цена: {price} руб.</div>
            <div className="my-2">Остаток: {rest} шт.</div>
            <Count
                min={1}
                max={rest}
                value={count}
                onChange={newCount => change(productId, newCount)}
            />
            <div className="mt-3">
                {
                    productInCart
                        ? <Link className="btn btn-success" to={toRoute('cart')}>Перейти в корзину</Link>
                        : <button className="btn btn-primary"
                                  onClick={() => handleAddClick(product)}>Добавить в корзину</button>
                }
            </div>
        </div>
    );
}

export default observer(Product);