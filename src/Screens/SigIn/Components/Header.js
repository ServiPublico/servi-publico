import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import SvgLogo from '../../../svgs/signIn/SvgLogo'
// import { Montserrat } from '../../../utils/fonts/index'
// import SvgPerson from '../../../svgs/signIn/SvgPerson'

export const Header = () => {
	return (
		<View style={styles.container}>
			{/* <SvgLogo /> */}
			<Text style={styles.txtWelcome}>Welcome</Text>
			<Text style={styles.txtTo}>to ServiPublic</Text>
			<View style={styles.circle} />
			{/* <SvgPerson style={styles.svgPerson} /> */}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		paddingLeft: 40,
		paddingTop: 30,
		height: 176
	},
	txtWelcome: {
		fontSize: 32,
		color: '#1A051D',
		fontWeight: '600',

		marginTop: 40
	},
	txtTo: {
		fontSize: 24,
		color: '#1A051D',
		fontWeight: '500'
	},
	circle: {
		width: 176,
		height: 176,
		borderRadius: 88,
		backgroundColor: '#FF647C',
		position: 'absolute',
		right: -88
	},
	svgPerson: {
		position: 'absolute',
		right: 0,
		top: 22
	}
})
