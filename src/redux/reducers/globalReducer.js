import {
	GET_BUSSINES,
	GET_TOKEN,
	GET_BUSSINES_NAMES
} from '../actionsTypes/actionTypesGlobal'

const initialState = {
	tokenAuth: { token: null },
	getBussines: [],
	getBussinesNames: []
}

export const globalReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TOKEN:
			return {
				...state,
				tokenAuth: action.payload
			}
		case GET_BUSSINES:
			return {
				...state,
				getBussines: action.payload
			}
		case GET_BUSSINES_NAMES:
			return {
				...state,
				getBussinesNames: action.payload
			}

		default: {
			return state
		}
	}
}
