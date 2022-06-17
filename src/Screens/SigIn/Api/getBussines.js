export const getBussines = async () => {
	try {
		const url = `https://servipublico.com/companies.json`

		let myHeaders = new Headers()
		myHeaders.append('Accept', 'application/json')
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
