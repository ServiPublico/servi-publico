import { GET_FUEC } from '../actionsTypes/actionTypesFuec'

const initialState = {
	dataFuec: []
}

export const FuecReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_FUEC:
			return {
				...state,
				dataFuec: action.payload
			}

		default: {
			return state
		}
	}
}
