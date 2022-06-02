export const postRoute = async ({
	business,
	BearerToken,
	idContract,
	obj1
}) => {
	try {
		const Url = `https://${business}.servipublico.com/api/contract-routes`
		let myHeaders = new Headers()
		myHeaders.append('Accept', 'application/json')
		myHeaders.append('Authorization', `Bearer ${BearerToken}`)
		let urlencoded = new FormData()
		// obj1
		urlencoded.append('centerFrom', obj1.centerFrom)
		urlencoded.append('centerTo', obj1.centerTo)
		urlencoded.append('contract_id', idContract)
		urlencoded.append('details', obj1.routeDetails)
		urlencoded.append('from', obj1.departureLocation)
		urlencoded.append('to', obj1.arrivalLocation)

		let requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: urlencoded
		}
		const res = await fetch(Url, requestOptions)
		const resPost = await res.json()
		return { succes: resPost }
	} catch (error) {
		console.error(error)
		return { error: error }
	}
}
