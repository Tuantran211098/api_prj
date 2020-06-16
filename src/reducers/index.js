import { combineReducers } from 'redux';
import Product from './productrock';
import Cart from './cartrock';
const myReducer = combineReducers( {
    Product
    , Cart
} );
export default myReducer;
