const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const intialState = {
  loading: false,
  users: [],
  error: ''
}


const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: ""
      }
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload
      }
    default:
      return state
  }
}

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      const users = response.data.map(user => user.id)
      dispatch(fetchUsersSuccess(users))
    })
    .catch(error => {
      const errorMsg = error.message
      dispatch(fetchUsersFailure(errorMsg))
    })
  }
}


const store = createStore(reducer,applyMiddleware(thunkMiddleware));

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(fetchUsers())