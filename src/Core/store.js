import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ToastReducer from './../Toast/reducer';

const store = createStore(combineReducers({ toast: ToastReducer }), applyMiddleware(thunk));

export default store;