import { GET_LICENSES } from '../actionsTypes/actionTypesLicense'

export const fetchDataLicense = (dispatch) => {
	return async ({ token, business }) => {
		const data = await getApiPurse({ token, business })
		dispatch({ type: GET_LICENSES, payload: data })
	}
}
