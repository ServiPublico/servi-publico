import {
	GET_CONTRACTS,
	GET_DEPARTMENT,
	GET_DRIVER_VEHICLE,
	GET_MUNICIPALITY,
	GET_VEHICLES
} from '../actionsTypes/actionTypesContracts'
import { getDataContracts } from '../../Screens/Contracts/Api/getDataContracts'
import { getDepartment } from '../../Screens/Contracts/Api/getDepartment'
import { getMunicipality } from '../../Screens/Contracts/Api/getMunicipality'
import { getVehicleUser } from '../../Screens/Contracts/Api/getVehicleUser'
import { getDriverVehicle } from '../../Screens/Contracts/Api/getDriverVehicles'

export const fetchDataContracts = (dispatch) => {
	return async ({ token, business }) => {
		const data = await getDataContracts({ token, business })
		dispatch({ type: GET_CONTRACTS, payload: data })
	}
}

export const fetchDataDepartment = (dispatch) => {
	return async ({ token, business }) => {
		const data = await getDepartment({ token, business })
		dispatch({ type: GET_DEPARTMENT, payload: data })
	}
}

export const fetchDataMunicipality = (dispatch) => {
	return async ({ token, business, idDepartament }) => {
		const data = await getMunicipality({ token, business, idDepartament })
		dispatch({ type: GET_MUNICIPALITY, payload: data })
	}
}

export const fetchDataVehicle = (dispatch) => {
	return async ({ token, business }) => {
		const data = await getVehicleUser({ token, business })
		dispatch({ type: GET_VEHICLES, payload: data })
	}
}

export const fetchDataDriverVehicle = (dispatch) => {
	return async ({ token, business, idVehicle }) => {
		const data = await getDriverVehicle({ token, business, idVehicle })
		dispatch({ type: GET_DRIVER_VEHICLE, payload: data })
	}
}

// export const postDataContract = (dispatch) => {
// 	return async ({ token, business }) => {
// 		const data = await getVehicleUser({ token, business })
// 		dispatch({ type: GET_VEHICLES, payload: data })
// 	}
// }
