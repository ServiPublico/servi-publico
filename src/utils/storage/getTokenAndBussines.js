import AsyncStorage from '@react-native-async-storage/async-storage'

export const getTokenAndBusiness = async () => {
	try {
		const token = await AsyncStorage.getItem('token')
		const business = await AsyncStorage.getItem('business')

		return {
			token: token != null ? JSON.parse(token) : null,
			business: business != null ? JSON.parse(business) : null
		}
	} catch (e) {
		console.error(e)
		return { error: e }
	}
}

export const getToken = async () => {
	try {
		const token = await AsyncStorage.getItem('token')
		return { token: token != null ? JSON.parse(token) : null }
	} catch (e) {
		console.error(e)
		return false
	}
}
