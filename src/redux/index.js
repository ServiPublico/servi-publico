import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import { purseReducer } from './reducers/reducer'
import { FuecReducer } from './reducers/fuecReducer'
import { createStore, applyMiddleware } from 'redux'
import { routesReducer } from './reducers/routesReducer'
import { contractsReducer } from './reducers/contractsReducer'
import { incidentsReducer } from './reducers/incidentsReducer'

const reducers = combineReducers({
	purseReducer: purseReducer,
	FuecReducer: FuecReducer,
	routesReducer: routesReducer,
	contractsReducer: contractsReducer,
	incidentsReducer: incidentsReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
