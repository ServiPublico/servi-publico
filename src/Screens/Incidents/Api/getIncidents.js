export const getIncidents = async ({ token, business }) => {
	try {
		const url = `https://${business}.servipublico.com/api/incidences?page=1&name=`
		//https://futuro.servipublico.com/api/incidences?page=1&name=
		let myHeaders = new Headers()
		myHeaders.append('Accept', 'application/json')
		myHeaders.append('Authorization', `Bearer ${token}`)
		let requestOptions = {
			method: 'GET',
			headers: myHeaders
		}
		const res = await fetch(url, requestOptions)
		const data = await res.json()
		return data.data
	} catch (error) {
		console.error(error)
	}
}
