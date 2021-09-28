import {makeObservable, observable, computed, action} from 'mobx';

class OrderStore {
    userFields = {
        username: {value: '', label: 'Name'},
        email: {value: '', label: 'Email'},
        phone: {value: '', label: 'Phone'}
    };

    get isValid() {
        return Object.values(this.userFields).every(item => item.value !== '');
    }

    get username() {
        return this.userFields.username.value;
    }

    get email() {
        return this.userFields.email.value;
    }
    get phone() {
        return this.userFields.phone.value;
    }

    change(key, value) {
        this.userFields[key].value = value.trim();
    }

    constructor() {
        makeObservable(this, {
            userFields: observable,
            username: computed,
            email: computed,
            phone: computed,
            isValid: computed,
            change: action.bound
        });
    }
}

export default new OrderStore;