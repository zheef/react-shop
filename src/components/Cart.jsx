import React, {useContext, useState} from "react";
import {observer} from "mobx-react-lite";
import StoreContext from '../context/store';
import ModalWindow from "./ModalWindow";
import Count from "./Count";

function Cart() {
    let {cart} = useContext(StoreContext);
    let {goods, amount, isEmpty, removeProduct, changeQuantity} = cart;

    if (isEmpty) {
        return (
            <div className="bg-danger text-white p-2">Корзина пуста</div>
        );
    }

    let goodsList = goods.map(({id, title, price, count, rest}) => (
        <tr key={id}>
            <td>{title}</td>
            <td>{price}</td>
            <td>
                <Count
                    min={1}
                    max={rest}
                    value={count}
                    onChange={newCount => changeQuantity(id, newCount)}
                />
            </td>
            <td>{price * count}</td>
            <td>
                <button className="btn btn-danger" onClick={() => removeProduct(id)}>Удалить</button>
            </td>
        </tr>
    ));

    // Контакты
    let {contacts} = useContext(StoreContext);
    let {userFields, change, isValid} = contacts;
    let fieldRows = Object.entries(userFields).map(([name, {label, value}]) => (
        <div className="mb-3" key={name}>
            <label className="form-label" htmlFor={name}>{label}</label>
            <input className="form-control" type="text" placeholder={`Enter ${label}`}
                   name={name}
                   value={value}
                   onChange={e => change(name, e.target.value.trim())}
            />
        </div>
    ));

    // Модальное окно
    const [modalShow, setModalShow] = useState(false);
    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);

    return (
        <>
            <section>
                <h1>Товары в корзине</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Название</th>
                        <th>Цена</th>
                        <th>Количество</th>
                        <th>Итого</th>
                        <th>&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    {goodsList}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>{amount}</td>
                        <td>&nbsp;</td>
                    </tr>
                    </tfoot>
                </table>
            </section>
            <section className="mt-2">
                <h1>Контакты</h1>
                <form>
                    {fieldRows}
                    <div className="text-center">
                        <button type="button"
                                className="btn btn-primary ms-1"
                                onClick={handleShow}
                                disabled={!isValid}>Подтвердить заказ
                        </button>
                    </div>
                </form>
                <ModalWindow show={modalShow} handleClose={handleClose} link="/result"/>
            </section>
        </>
    );
}

export default observer(Cart);