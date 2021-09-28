import {makeObservable, observable, action, computed} from "mobx";

class CartStore {
    goods = [];

    get amount() {
        return this.goods.reduce((acc, item) => acc + item.price * item.count, 0);
    }

    get isEmpty() {
        return this.goods.length === 0;
    }

    addProduct(product) {
        this.goods.push(product);
    }

    removeProduct(id) {
        this.goods = this.goods.filter(item => item.id !== id);
    }

    changeQuantity(id, count) {
        let item = this.goods.find(product => product.id === id);
        if (item) {
            item.count = count;
        }
    }

    constructor() {
        makeObservable(this, {
            goods: observable,
            amount: computed,
            isEmpty: computed,
            addProduct: action.bound,
            removeProduct: action.bound,
            changeQuantity: action.bound
        });
    }
}

export default new CartStore;