import { GET_TOKEN } from '../actionsTypes/actionTypesGlobal'

const initialState = {
	tokenAuth: { token: null }
}

export const globalReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TOKEN:
			return {
				...state,
				tokenAuth: action.payload
			}

		default: {
			return state
		}
	}
}
