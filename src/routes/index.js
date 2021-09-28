import Cart from '../components/Cart';
import Products from '../components/Products';
import Product from '../components/Product';
import ResultForm from '../components/ResultForm';
import E404 from "../components/E404";

const paths = [
    {
        name: 'cart',
        path: '/cart',
        component: Cart
    },
    {
        name: 'result',
        path: '/result',
        component: ResultForm
    },
    {
        name: 'product',
        path: '/product/:id',
        component: Product
    },
    {
        name: 'Error404',
        path: '/404',
        component: E404
    },
    {
        name: 'products',
        path: '/',
        component: Products
    }
];

const routes = {};

paths.forEach(item => {
    if (item.hasOwnProperty('name')) {
        routes[item.name] = item.path;
    }
});

const toRoute = name => routes[name];

const toProductRoute = id => `/product/${id}`;

export {paths, toRoute, toProductRoute};