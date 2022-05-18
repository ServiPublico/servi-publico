export const getApiPurse = async ({ token, paramasUrl }) => {
	try {
		const url = `https://demo.servipublico.com/api/my-purshes?status_pay=${paramasUrl}`
		let myHeaders = new Headers()
		myHeaders.append('Accept', 'application/json')
		myHeaders.append('Authorization', `Bearer ${token}`)
		let requestOptions = {
			method: 'GET',
			headers: myHeaders
		}
		const res = await fetch(url, requestOptions)
		const data = await res.json()
		return data
	} catch (error) {
		console.error(error)
		return false
	}
}
