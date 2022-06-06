import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import { purseReducer } from './reducers/reducer'
import { FuecReducer } from './reducers/fuecReducer'
import { createStore, applyMiddleware } from 'redux'
import { routesReducer } from './reducers/routesReducer'
import { contractsReducer } from './reducers/contractsReducer'
import { incidentsReducer } from './reducers/incidentsReducer'
import { globalReducer } from './reducers/globalReducer'
import { mainReducer } from './reducers/mainReducer'

const reducers = combineReducers({
	globalReducer: globalReducer,
	purseReducer: purseReducer,
	FuecReducer: FuecReducer,
	routesReducer: routesReducer,
	contractsReducer: contractsReducer,
	incidentsReducer: incidentsReducer,
	mainReducer: mainReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
