import { connect } from 'react-redux'
import React, { useState } from 'react'
import { useApiAuth } from './Hooks/useApiAuth'
import { ROUTERS } from '../../utils/navigation'
import { Input } from '../SigIn/Components/Input'
import { Header } from '../SigIn/Components/Header'
import SelectDropdown from 'react-native-select-dropdown'
import { setToken } from '../../redux/actions/actionGlobal'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

// const initialInputs = {
// 	Email: 'glasipa2014@hotmail.com',
// 	business: null,
// 	Password: '22418165'
// }
const initialInputs = {
	Email: '',
	business: null,
	Password: ''
}

const businessNames = [
	'Trans. Especiales M&L',
	'Empresa Demostración',
	'Readytransport SAS',
	'Redes Por Mi Colombia S.A.S',
	'Grupo Emprendedores Futuro S.A.S',
	'Transporte Los Cardos De Colombia S.A.S',
	'Cootranscachipay',
	'Transdaga S.A.S'
]

const businessUrl = [
	'myl',
	'demo',
	'ready',
	'redes',
	'futuro',
	'cardos',
	'cachipay',
	'transdaga'
]

const SigIn = ({ actions, navigation }) => {
	const { postDataLogin } = useApiAuth()
	const [Inputs, setInputs] = useState(initialInputs)
	const [flagSelect, setFlagSelect] = useState(false)
	const [dataSelectBusiness, setDataSelectBusiness] = useState(null)

	const handleChange = (name) => (value) => {
		setInputs((state) => ({ ...state, [name]: value }))
	}

	const handleChangeSelect = (name, value) => {
		setInputs((state) => ({ ...state, [name]: value }))
	}

	const storeData = async (tokenSave, businessSave) => {
		try {
			const token = JSON.stringify(tokenSave)
			const business = JSON.stringify(businessSave)
			await AsyncStorage.setItem('business', business)
			await AsyncStorage.setItem('token', token)
		} catch (e) {
			console.error(e)
		}
	}

	const onPressSignIn = async (indexBusiness) => {
		setFlagSelect(false)
		if (validateDate(Inputs)) {
			const res = await postDataLogin({
				business: businessUrl[indexBusiness],
				email: Inputs.Email,
				password: Inputs.Password
			})
			if (res.access_token) {
				await storeData(res.access_token, businessUrl[indexBusiness])
				actions.setTokenAction({ token: res.access_token })
			} else {
				setFlagSelect(true)
			}
		}
	}

	const onPressForgot = () => {
		navigation.navigate(ROUTERS.ForgotPassword)
	}

	const validateDate = (data) => {
		const emailExp =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

		if (!emailExp.test(data?.Email)) {
			return false
		}
		if (data.bussines === null) {
			return false
		}
		if (data.Password === '') {
			return false
		}
		return true
	}

	return (
		<View style={styles.container}>
			<Header />
			<SelectDropdown
				data={businessNames}
				onSelect={(selectedItem, index) => {
					handleChangeSelect('business', selectedItem)
					setDataSelectBusiness(index)
				}}
				defaultButtonText='Selecciona la empresa'
				buttonStyle={{
					marginTop: 10,
					marginHorizontal: 40,
					borderRadius: 24,
					borderWidth: 1,
					borderColor: flagSelect ? 'red' : '#EAE8EA',
					height: 48,
					flexDirection: 'row',
					alignItems: 'center',
					paddingHorizontal: 16,
					width: '80%'
				}}
				buttonTextStyle={{
					flex: 1,
					fontSize: 15,
					padding: 0,
					margin: 0
				}}
				buttonTextAfterSelection={(selectedItem, index) => selectedItem}
				rowTextForSelection={(item, index) => item}
			/>
			{flagSelect && (
				<Text style={{ color: 'red', marginLeft: 60 }}>
					Debes seleccionar una empresa
				</Text>
			)}
			<Input
				colorBorder={flagSelect ? 'red' : '#EAE8EA'}
				mt={40}
				placeholder={'Email'}
				handleChange={handleChange}
				value={Inputs.Email}
			/>
			{flagSelect && (
				<Text style={{ color: 'red', marginLeft: 60 }}>
					Revisa tu correo electronico
				</Text>
			)}
			<Input
				colorBorder={flagSelect ? 'red' : '#EAE8EA'}
				value={Inputs.Password}
				mt={16}
				pass={true}
				placeholder={'Password'}
				handleChange={handleChange}
			/>
			{flagSelect && (
				<Text style={{ color: 'red', marginLeft: 60 }}>
					Revisa tu contraseña
				</Text>
			)}
			<View style={styles.containerSignIn}>
				<TouchableOpacity
					style={styles.btnSignIn}
					onPress={() => {
						onPressSignIn(dataSelectBusiness)
					}}
				>
					<Text style={styles.txtSignIn}>INICIAR SESIÓN</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity style={styles.btnForgot} onPress={onPressForgot}>
				<Text style={styles.txtForgot}>Olvidaste la contraseña?</Text>
			</TouchableOpacity>
			<View style={styles.containerOr}>
				<View style={styles.line} />
			</View>
			<TouchableOpacity style={styles.btnSignUp}>
				<Text style={styles.txtSignUp}>No tienes una cuenta? Registrate</Text>
			</TouchableOpacity>
		</View>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: { setTokenAction: setToken(dispatch) }
	}
}
function mapStateToProps(state) {
	return {
		tokenAuth: state.globalReducer.tokenAuth
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SigIn)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF'
	},
	containerSignIn: {
		flexDirection: 'row',
		marginHorizontal: 40,
		marginTop: 24
	},
	btnSignIn: {
		backgroundColor: '#0F4C81',
		borderRadius: 24,
		flex: 1,
		height: 48,
		justifyContent: 'center',
		alignItems: 'center'
	},
	txtSignIn: {
		fontWeight: '600',
		color: '#FFF',
		fontSize: 17
	},
	btnFaceId: {
		width: 48,
		height: 48,
		borderRadius: 16,
		backgroundColor: '#6979F8',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 20
	},
	btnForgot: {
		marginTop: 24,
		alignSelf: 'center'
	},
	txtForgot: {
		fontSize: 12,
		color: '#0F4C81',

		fontWeight: '500'
	},
	containerOr: {
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: 40,
		marginTop: 24
	},
	line: {
		flex: 1,
		height: 1,
		backgroundColor: '#F0F0F0'
	},
	txtOr: {
		marginHorizontal: 20,
		fontSize: 16,
		color: '#1A051D',

		fontWeight: 'normal'
	},
	btnSignFb: {
		marginHorizontal: 40,
		height: 48,
		borderRadius: 24,
		backgroundColor: '#6979F8',
		marginTop: 16,
		justifyContent: 'center',
		alignItems: 'center'
	},
	txtSignInFb: {
		fontWeight: '600',
		fontSize: 17,
		color: '#FFF',
		textTransform: 'uppercase'
	},
	btnSignInGoogle: {
		marginHorizontal: 40,
		height: 48,
		borderRadius: 24,
		backgroundColor: '#FF647C',
		marginTop: 16,
		justifyContent: 'center',
		alignItems: 'center'
	},
	btnSignUp: {
		alignSelf: 'center',
		marginTop: 10
	},
	txtSignUp: {
		fontSize: 12,
		color: '#0F4C81',

		fontWeight: '500'
	}
})
