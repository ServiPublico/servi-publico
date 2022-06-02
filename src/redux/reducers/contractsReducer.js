import {
	GET_CONTRACTS,
	GET_DEPARTMENT,
	GET_DRIVER_VEHICLE,
	GET_MUNICIPALITY,
	GET_VEHICLES
} from '../actionsTypes/actionTypesContracts'

const initialState = {
	dataContracts: [],
	getDepartment: [],
	getMunicipality: [],
	getVehicles: [],
	getDriverVehicle: []
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
		case GET_VEHICLES:
			return {
				...state,
				getVehicles: action.payload
			}
		case GET_DRIVER_VEHICLE:
			return {
				...state,
				getDriverVehicle: action.payload
			}
		default: {
			return state
		}
	}
}
