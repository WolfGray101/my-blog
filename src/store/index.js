import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers, createStore, applyMiddleware } from 'redux'


import getArticlesReducer from './reducers/reducer'
import { createAcc } from './reducers/authorize-reducer'
import articlesReducer from './reducers/article-reducer'

const storeCreater = combineReducers({
  getArticlesReducer,
  createAcc,
  articlesReducer
 })
const store = createStore(storeCreater, composeWithDevTools(applyMiddleware(thunk)))

export default store
