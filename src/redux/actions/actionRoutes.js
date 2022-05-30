import { GET_ROUTES } from '../actionsTypes/actionTypesRoutes'

export const fetchDataRoutes = (dispatch) => {
	return async ({ token, business }) => {
		const data = await getApiPurse({ token, business })
		dispatch({ type: GET_ROUTES, payload: data })
	}
}
