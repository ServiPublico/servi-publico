import { getToken } from '../../utils/storage/getTokenAndBussines'
import { GET_TOKEN } from '../actionsTypes/actionTypesGlobal'

export const fetchToken = (dispatch) => {
	return async () => {
		const data = await getToken()
		dispatch({ type: GET_TOKEN, payload: data })
	}
}

export const setToken = (dispatch) => {
	return async (token) => {
		dispatch({ type: GET_TOKEN, payload: token })
	}
}
