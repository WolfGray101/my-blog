import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers, createStore, applyMiddleware } from 'redux'

// import reducerAside from './reducer-aside'
// import reducerHeader from './reducer-header'
// import ticketReducer from './reducer-item-list'
import getArticlesReducer from './reducers/reducer'

// const storeCreater = combineReducers({
//   reducerAside,
//   reducerHeader,
//   ticketReducer,
// })
const store = createStore(getArticlesReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
