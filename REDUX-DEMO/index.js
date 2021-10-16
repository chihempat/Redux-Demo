const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const logger = reduxLogger.createLogger();

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';


//action craete
function buyCake(){
  //action
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }

}
//action craete
function buyIceream(){
  //action
  return {
    type: BUY_ICECREAM,
    info: 'First redux action'
  }

}

// (previos,action) => new state

const intialIcecreamState = {
  numOfIceCreams: 20
}

const intialCakeState = {
  numOfCakes: 10,
}

const cakeReducer = (state=intialCakeState,action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state;
  }
}

const icecreamReducer = (state=intialIcecreamState,action) => {
  switch(action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1
    }
    default: return state;
  }
}


//Store
const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer
})
const store = createStore(rootReducer,applyMiddleware(logger));
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => { });
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceream());

unsubscribe();