import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
	header: {
		backgroundColor: '#FFF',
		borderBottomLeftRadius: 24,
		borderBottomRightRadius: 24,
		height: 96,
		paddingTop: getStatusBarHeight(),
		justifyContent: 'center',
		alignItems: 'center'
	},
	container: {
		flex: 1,
		backgroundColor: '#F7F8F9'
	},
	title: {
		fontSize: 17,
		color: '#0F4C81'
	},
	btnClose: {
		position: 'absolute',
		bottom: 20,
		left: 16
	},
	btnOption: {
		position: 'absolute',
		bottom: 20,
		right: 16
	},
	containerTime: {
		flexDirection: 'row',
		height: 48,
		margin: 16,
		borderRadius: 24,
		backgroundColor: '#FFF'
	},
	btnTime: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	txtTime: {
		fontSize: 12,
		color: '#1A051D'
	},
	svgHover: {
		position: 'absolute',
		bottom: 0
	},
	btnUpdate: {
		width: 160,
		height: 40,
		borderRadius: 20,
		backgroundColor: '#1A051D',
		marginTop: 16,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center'
	},
	txtUpdate: {
		fontSize: 13,
		color: '#FFF'
	}
})
