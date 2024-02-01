import { getProductsreducer } from './Prouctsreducer';

import {combineReducers} from "redux";



const rooteducers= combineReducers({
    getProductsdata:getProductsreducer
});

export default rooteducers;

