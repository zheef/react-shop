import {observable, makeObservable, computed, action} from 'mobx';

class ProductsStore {
    list = [
        {
            id: 10,
            title: 'Samsung S21',
            price: 12000,
            rest: 10,
            count: 1
        },
        {
            id: 101,
            title: 'Iphone 13 Pro Max',
            price: 120000,
            rest: 5,
            count: 1
        },
        {
            id: 103,
            title: 'Iphone 12 Pro Max',
            price: 109000,
            rest: 2,
            count: 1
        },
        {
            id: 105,
            title: 'Samsung A51',
            price: 30000,
            rest: 8,
            count: 1
        }
    ];

    get products_sum() {
        return this.list.reduce((accum, item) => accum + (item.price * item.count), 0);
    }

    change(id, count) {
        let item = this.list.find(product => product.id === id);
        if (item) {
            item.count = count;
        }
    }

    getProductByID(id) {
        return this.list.find(product => product.id === id);
    }

    constructor() {
        makeObservable(this, {
            list: observable,
            products_sum: computed,
            change: action.bound,
            getProductByID: action.bound
        });
    }
}

export default new ProductsStore;