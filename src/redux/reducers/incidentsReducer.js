import { GET_INCIDENTS } from '../actionsTypes/actionTypesIncidents'

const initialState = {
	dataIncidents: []
}

export const incidentsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_INCIDENTS:
			return {
				...state,
				dataIncidents: action.payload
			}

		default: {
			return state
		}
	}
}
