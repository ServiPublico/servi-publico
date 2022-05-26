import { GET_PYMES } from '../actionsTypes/actionTypes'
import { getApiPurse } from '../../Screens/Purse/Apis/useApiPurse'

export const fetchData = (dispatch) => {
	return async ({ token, business, paramasUrl }) => {
		const data = await getApiPurse({ token, business, paramasUrl })
		dispatch({ type: GET_PYMES, payload: data })
	}
}
