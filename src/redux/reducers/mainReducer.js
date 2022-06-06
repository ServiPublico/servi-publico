import { GET_DATA_MAIN } from '../actionsTypes/actionTypesMain'

const initialState = {
	getDataMain: []
}

export const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_DATA_MAIN:
			return {
				...state,
				getDataMain: action.payload
			}

		default: {
			return state
		}
	}
}
