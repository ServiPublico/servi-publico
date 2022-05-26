import { GET_CONTRACTS } from '../actionsTypes/actionTypesContracts'

const initialState = {
	dataContracts: []
}

export const contractsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CONTRACTS:
			return {
				...state,
				dataContracts: action.payload
			}
		default: {
			return state
		}
	}
}
