import { getApiPurse } from '../Screens/Purse/Apis/useApiPurse'
import { GET_PYMES } from './actionTypes'

export const fetchData = (token) => {
	return async (dispatch) => {
		const data = await getApiPurse(token)
		dispatch({
			type: GET_PYMES,
			payload: data
		})
	}
}
