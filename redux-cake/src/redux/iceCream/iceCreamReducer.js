import { BUY_ICECREAM } from './iceCreamTypes';


const instialState = {
  numberOfIceCreams:20
}

const iceCreamReducer = (state=instialState, action) => {

  switch (action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numberOfIceCreams: state.numberOfIceCreams - 1
    }
    default: return state
  }
}

export default iceCreamReducer;