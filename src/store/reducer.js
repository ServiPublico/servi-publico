import { GET_PYMES, READ_USERS } from './actionTypes'

const initialState = {
	characters: [],
	dataPymes: null
}

export default function (state = initialState, action) {
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
