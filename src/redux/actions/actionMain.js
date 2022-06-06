import { getDataMain } from '../../Screens/StaticsHealth/Api/getDataMain'
import { GET_DATA_MAIN } from '../actionsTypes/actionTypesMain'

export const fetchDataMain = (dispatch) => {
	return async ({ token, business }) => {
		const data = await getDataMain({ token, business })
		dispatch({ type: GET_DATA_MAIN, payload: data })
	}
}
