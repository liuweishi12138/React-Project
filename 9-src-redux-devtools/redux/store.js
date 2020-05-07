//该文件可以创建一个redux中最为核心的一个对象---store，随后会暴露出去。

//引入createStore，用于创建store
import { createStore,applyMiddleware} from "redux";
//引入汇总之后服务的reducer
import allReducer from './reducers/index';
//引入redux-thunk用于支持异步action
import thunk from 'redux-thunk';
//引入composeWithDevTools
import {composeWithDevTools} from 'redux-devtools-extension';


//创建 store 同时指定为store服务的reducer 随后暴露
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))