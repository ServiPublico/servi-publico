import {
	GET_CONTRACTS,
	GET_DEPARTMENT,
	GET_MUNICIPALITY
} from '../actionsTypes/actionTypesContracts'
import { getDataContracts } from '../../Screens/Contracts/Api/getDataContracts'
import { getDepartment } from '../../Screens/Contracts/Api/getDepartment'
import { getMunicipality } from '../../Screens/Contracts/Api/getMunicipality'

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
