import { getFuec } from '../../Screens/Fuec/Api/getFuec'
import { GET_FUEC } from '../actionsTypes/actionTypesFuec'

export const fetchDataFuec = (dispatch) => {
	return async ({ token, business }) => {
		const data = await getFuec({ token, business })
		dispatch({ type: GET_FUEC, payload: data })
	}
}
