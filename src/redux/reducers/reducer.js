import { GET_PYMES, READ_USERS } from '../actionsTypes/actionTypes'

const initialState = {
	characters: [],
	dataPymes: []
}

export const firtsReducer = (state = initialState, action) => {
	switch (action.type) {
		case READ_USERS:
			return {
				...state,
				characters: action.payload
			}
		case GET_PYMES:
			return {
				...state,
				dataPymes: action.payload
			}
		default: {
			return state
		}
	}
}
