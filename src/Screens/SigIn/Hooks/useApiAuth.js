export const useApiAuth = () => {
	const postDataLogin = async ({ email, password }) => {
		try {
			const Url = 'https://demo.servipublico.com/api/login'
			let myHeaders = new Headers()
			myHeaders.append('Accept', 'application/json')

			let urlencoded = new FormData()
			urlencoded.append({
				key: 'email',
				value: email,
				type: 'text'
			})
			urlencoded.append({
				key: 'password',
				value: password,
				type: 'text'
			})

			// let requestOptions = {
			// 	method: 'POST',
			// 	headers: myHeaders,
			// 	body: urlencoded
			// }
			let requestOptions = {
				method: 'POST',
				header: [],
				body: {
					mode: 'formdata',
					formdata: [
						{
							key: 'email',
							value: 'caescobar976@gmail.com',
							type: 'text'
						},
						{
							key: 'password',
							value: '16076310',
							type: 'text'
						}
					]
				}
			}

			const res = await fetch(Url, requestOptions)
			const token = await res.json()
			console.log(token)
			return token
		} catch (error) {
			console.error(error)
			return false
		}
	}

	return { postDataLogin }
}
