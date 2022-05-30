import { getIncidents } from '../../Screens/Incidents/Api/getIncidents'
import { GET_INCIDENTS } from '../actionsTypes/actionTypesIncidents'

export const fetchDataIncidents = (dispatch) => {
	return async ({ token, business }) => {
		const data = await getIncidents({ token, business })
		dispatch({ type: GET_INCIDENTS, payload: data })
	}
}
