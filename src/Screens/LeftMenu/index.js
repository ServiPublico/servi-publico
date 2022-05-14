import React, { memo, useCallback, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import SvgAvatar from '../../svgs/menu/SvgAvatar'
import { navigate } from '../../utils/navigation'
// import { Montserrat } from 'utils/fonts'
// import { useNavigation } from '@react-navigation/native'
// // @ts-ignore
// import { navigationRef } from 'nav/MainNav'

const ROUTERS = [
	'Onboarding',
	'SigIn',
	'ForgotPassword',
	'Profile',
	'Notification',
	'Dashboard'
]

export const LeftMenu = ({ onClose }) => {
	const [index, setIndex] = useState(0)

	const onPress = (key, index) => {
		onClose()

		navigate(key)
		setIndex(index)
	}
	return (
		<View style={styles.container}>
			<SvgAvatar />
			<Text style={styles.txtName}>Oscar Barrett</Text>
			<Text style={styles.txtBalance}>Balance: $1,359.00</Text>
			<View style={{ height: 60 }} />
			{ROUTERS.map((item, key) => {
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
		</View>
	)
}

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
