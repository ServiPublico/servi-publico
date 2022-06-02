import { getRoutesById } from '../../Screens/Routes/Apis/getRoutes'
import { GET_ROUTES } from '../actionsTypes/actionTypesRoutes'

export const fetchDataRoutes = (dispatch) => {
	return async ({ token, business, idContract }) => {
		const data = await getRoutesById({ token, business, idContract })
		dispatch({ type: GET_ROUTES, payload: data })
	}
}
