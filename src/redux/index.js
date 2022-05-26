import { createStore, applyMiddleware } from 'redux'
import { firtsReducer } from './reducers/reducer'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { contractsReducer } from './reducers/contractsReducer'

const reducers = combineReducers({
	firtsReducer,
	contractsReducer: contractsReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
