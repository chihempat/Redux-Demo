import { BUY_CAKE } from './cakeTypes';

const intialState = {
  numberOfCake: 10
}


const cakeReducer = (state = intialState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      numberOfCake: state.numberOfCake - action.payload
    }
    default:
      return state
  }
}

export default cakeReducer;