import { GET_CONTRACTS } from '../actionsTypes/actionTypesContracts'
import { getDataContracts } from '../../Screens/Contracts/Api/getDataContracts'

export const fetchDataContracts = (dispatch) => {
	return async ({ token, business }) => {
		const data = await getDataContracts({ token, business })
		dispatch({ type: GET_CONTRACTS, payload: data })
	}
}
