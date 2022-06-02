import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { setToken } from '../../redux/actions/actionGlobal'
import SvgAvatar from '../../svgs/menu/SvgAvatar'
import { navigate, ROUTERS } from '../../utils/navigation'

const PROTECTEDROUTERS = ['Fuec', 'Profile']
const ROUTERSMAP = ['SigIn', 'Onboarding', 'ForgotPassword']

const LeftMenu = ({ tokenAuth, actions, onClose }) => {
	const [index, setIndex] = useState(0)
	const [tokenLogin, setTokenLogin] = useState(null)

	const onPress = (key, index) => {
		onClose()
		navigate(key)
		setIndex(index)
	}

	const getTokenAndBusiness = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem('token')
			return {
				token: jsonValue != null ? JSON.parse(jsonValue) : null
			}
		} catch (e) {
			console.error(e)
		}
	}

	;(async () => {
		const { token } = await getTokenAndBusiness()
		setTokenLogin(token)
		setDataApi(data)
	})()

	const signOut = async () => {
		await AsyncStorage.removeItem('token')
		onClose()
		actions.setTokenAction({ token: undefined })
	}

	return (
		<View style={styles.container}>
			<SvgAvatar />
			<Text style={styles.txtName}>Oscar Barrett</Text>
			<Text style={styles.txtBalance}>Balance: $1,359.00</Text>
			<View style={{ height: 60 }} />
			{tokenAuth.token ? (
				<View>
					{PROTECTEDROUTERS.map((item, key) => {
						return (
							<TouchableOpacity
								style={styles.btn}
								onPress={() => onPress(item, key)}
								key={key}
							>
								<Text
									style={[
										styles.txt,
										{ color: index !== key ? '#969696' : '#4B66EA' }
									]}
								>
									{item}
								</Text>
							</TouchableOpacity>
						)
					})}
					<View>
						<TouchableOpacity>
							<Text onPress={signOut} style={styles.txt}>
								{' '}
								Cerar session
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			) : (
				ROUTERSMAP.map((item, key) => {
					return (
						<TouchableOpacity
							style={styles.btn}
							onPress={() => onPress(item, key)}
							key={key}
						>
							<Text
								style={[
									styles.txt,
									{ color: index !== key ? '#969696' : '#4B66EA' }
								]}
							>
								{item}
							</Text>
						</TouchableOpacity>
					)
				})
			)}
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

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu)

const styles = StyleSheet.create({
	btn: {
		height: 48,
		marginBottom: 20,
		justifyContent: 'center'
	},
	txt: {
		fontSize: 16,
		color: '#969696',

		textTransform: 'uppercase'
	},
	txtBalance: {
		fontSize: 14,
		color: '#969696',

		fontWeight: '600',
		textTransform: 'uppercase',
		marginTop: 2
	},
	txtName: {
		fontSize: 18,
		color: '#131313',

		fontWeight: '600',
		textTransform: 'uppercase',
		marginTop: 9
	},
	container: {
		flex: 1,
		backgroundColor: '#FFF',
		paddingTop: 100,
		paddingLeft: 40
	}
})
