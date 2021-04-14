
import { createStore } from 'redux';
import { redux } from 'react-redux';
import {createLogger} from "redux-logger";

const redux = require('redux')
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddelware = redux.applyMiddleware;

const logger = createLogger();
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
function buyCake(){
    return {
            type:BUY_CAKE,
            info:"This is buy cake action"
        }
    
}
function buyIceCream(){
  return {
    type:BUY_ICECREAM,
    info:"This is buy icecream action"
  }
}

// const initialState ={
//     numberOfCakes:10,
//     numberOfIceCream:20
// }
const cakeInitialState ={
  numberOfCakes:10
}
const iceCreamInitialState = {
  numberOfIceCream:20
}


// const reducer = (state=initialState,action)=>{
//     switch(action.type){
//         case "BUY_CAKE":return {
//             ...state,
//             numberOfCakes:state.numberOfCakes-1
//         }
//         case "BUY_ICECREAM":return {
//           ...state,
//           numberOfIceCream:state.numberOfIceCream-1
//         }
//         default:return state
//     }
// }
const cakeReducer = (state = cakeInitialState,action)=>{
  switch(action.type){
    case "BUY_CAKE":return {
      ...state,
      numberOfCakes:state.numberOfCakes-1
    }
    default: return state
  }
}
const iceCreamReducer = (state = iceCreamInitialState,action)=>{
  switch(action.type){
    case "BUY_ICECREAM":return {
      ...state,
      numberOfIceCream:state.numberOfIceCream-1
    }
    default: return state
  }
}

const root = combineReducers({
  cake:cakeReducer,
  iceCream:iceCreamReducer
})

const store = createStore(root,applyMiddelware(logger))
console.log("Initial Store",store.getState())
const unsubscribe = store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
console.log(unsubscribe)
unsubscribe()