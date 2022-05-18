export const useApiAuth = () => {
	const postDataLogin = async ({ email, password }) => {
		try {
			const Url = 'https://demo.servipublico.com/api/login'
			let myHeaders = new Headers()
			myHeaders.append('Accept', 'application/json')
			let urlencoded = new FormData()
			urlencoded.append('email', email)
			urlencoded.append('password', password)
			let requestOptions = {
				method: 'POST',
				headers: myHeaders,
				body: urlencoded
			}
			const res = await fetch(Url, requestOptions)
			const token = await res.json()
			return token
		} catch (error) {
			console.error(error)
			return false
		}
	}

	return { postDataLogin }
}
