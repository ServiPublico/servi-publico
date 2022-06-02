export const postDataContract = async ({
	business,
	BearerToken,
	obj1,
	obj2
}) => {
	try {
		const Url = `https://${business}.servipublico.com/api/contracts-contractors`
		let myHeaders = new Headers()
		myHeaders.append('Accept', 'application/json')
		myHeaders.append('Authorization', `Bearer ${BearerToken}`)
		let urlencoded = new FormData()
		// obj1
		urlencoded.append('nit', obj1.nitBussines)
		urlencoded.append('contractor', obj1.nameOfBussineContract)
		urlencoded.append('adress', obj1.addresOffice)
		urlencoded.append('phone', obj1.phoneNumber)
		urlencoded.append('email', obj1.email)
		urlencoded.append('web', obj1.webPage)
		urlencoded.append('c_name', obj1.nameContact)
		urlencoded.append('c_last_name', obj1.lastNameContac)
		urlencoded.append('c_cc', obj1.citizenshipCard)
		urlencoded.append('c_adress', obj1.addres)
		urlencoded.append('c_phone', obj1.numberOfPhone)
		//obj2
		urlencoded.append('number', obj2.numberOfContracts)
		urlencoded.append('incomes', obj2.income)
		urlencoded.append('contract_type', obj2.typeContract)
		urlencoded.append('vehicle_id', obj2.assignVehicle)
		urlencoded.append('user_id', obj2.assignFirstDriver)
		urlencoded.append('user_second_id', obj2.assignSecondDriver)
		urlencoded.append('user_third_id', obj2.assignThirdDriver)
		urlencoded.append('user_four_id', obj2.assignFourthDriver)
		urlencoded.append('object', obj2.objectOfContract)
		urlencoded.append('department_id', obj2.department)
		urlencoded.append('municipality_id', obj2.municipality)
		urlencoded.append('convenio', obj2.conventionName)
		urlencoded.append('start_date', obj2.startDate)
		urlencoded.append('end_date', obj2.endDate)
		urlencoded.append('details', obj2.detailOfContract)
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
