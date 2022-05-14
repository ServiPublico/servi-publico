import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

import { ROUTERS } from '../../utils/navigation'
import { Input } from '../SigIn/Components/Input'
import { Header } from '../SigIn/Components/Header'

import SvgFaceId from '../../svgs/signIn/SvgFaceId'
import { useApiAuth } from './Hooks/useApiAuth'

const initialInputs = {
	Email: 'caescobar976@gmail.com',
	Password: '16076310'
}

export const SigIn = ({ navigation }) => {
	const [Inputs, setInputs] = useState(initialInputs)
	const { postDataLogin } = useApiAuth()
	const handleChange = (name) => (value) => {
		setInputs((state) => ({ ...state, [name]: value }))
	}

	const onPressSignIn = async () => {
		console.log('envio de datos ')
		res = await postDataLogin(Inputs.Email, Inputs.Password)
		console.log(res)
		navigation.navigate(ROUTERS.Dashboard)
	}

	const onPressForgot = () => {
		navigation.navigate(ROUTERS.ForgotPassword)
	}

	return (
		<View style={styles.container}>
			<Header />
			<Input
				mt={40}
				placeholder={'Email'}
				handleChange={handleChange}
				value={Inputs.Email}
			/>
			<Input
				value={Inputs.Password}
				mt={16}
				pass={true}
				placeholder={'Password'}
				handleChange={handleChange}
			/>
			<View style={styles.containerSignIn}>
				<TouchableOpacity style={styles.btnSignIn} onPress={onPressSignIn}>
					<Text style={styles.txtSignIn}>SIGN IN</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.btnFaceId} onPress={onPressSignIn}>
					<SvgFaceId />
				</TouchableOpacity>
			</View>
			<TouchableOpacity style={styles.btnForgot} onPress={onPressForgot}>
				<Text style={styles.txtForgot}>Forgot password?</Text>
			</TouchableOpacity>

			<View style={styles.containerOr}>
				<View style={styles.line} />
				<Text style={styles.txtOr}>or</Text>
				<View style={styles.line} />
			</View>

			<TouchableOpacity style={styles.btnSignFb} onPress={onPressSignIn}>
				<Text style={styles.txtSignInFb}>Sign In With Facebook</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.btnSignInGoogle}>
				<Text style={styles.txtSignInFb}>Sign In With Google</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.btnSignUp}>
				<Text style={styles.txtSignUp}>Don’t Have Account? Sign UP</Text>
			</TouchableOpacity>
		</View>
	)
}

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
