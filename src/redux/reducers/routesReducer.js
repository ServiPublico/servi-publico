import { GET_ROUTES } from '../actionsTypes/actionTypesRoutes'

const initialState = {
	dataRoutes: []
}

export const routesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ROUTES:
			return {
				...state,
				dataRoutes: action.payload
			}

		default: {
			return state
		}
	}
}
