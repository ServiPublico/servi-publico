import { GET_LICENSES } from '../actionsTypes/actionTypesLicense'

const initialState = {
	dataLicense: []
}

export const licenseReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_LICENSES:
			return {
				...state,
				dataLicense: action.payload
			}

		default: {
			return state
		}
	}
}
