import {
	GET_CONTRACTS,
	GET_DEPARTMENT,
	GET_MUNICIPALITY
} from '../actionsTypes/actionTypesContracts'

const initialState = {
	dataContracts: [],
	getDepartment: [],
	getMunicipality: []
}

export const contractsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CONTRACTS:
			return {
				...state,
				dataContracts: action.payload
			}
		case GET_DEPARTMENT:
			return {
				...state,
				getDepartment: action.payload
			}
		case GET_MUNICIPALITY:
			return {
				...state,
				getMunicipality: action.payload
			}
		default: {
			return state
		}
	}
}
