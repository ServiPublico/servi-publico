import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F7F8F9'
	},
	header: {
		backgroundColor: '#6979F8',
		borderBottomLeftRadius: 24,
		borderBottomRightRadius: 24,
		height: 96,
		paddingTop: getStatusBarHeight(),
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontSize: 17,
		color: '#fff'
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
	item: {
		marginHorizontal: 16,
		marginTop: 16,
		backgroundColor: '#FFF',
		paddingLeft: 70,
		paddingTop: 20,
		paddingBottom: 10,
		borderRadius: 16
	},
	containerSignIn: {
		flexDirection: 'row',
		marginHorizontal: 40,
		marginTop: 24
	},
	btnSignIn: {
		backgroundColor: '#6979F8',
		borderRadius: 24,
		flex: 1,
		height: 38,
		justifyContent: 'center',
		alignItems: 'center'
	},
	txtSignIn: {
		fontWeight: '600',
		color: '#FFF',
		fontSize: 16
	},

	avatar: {
		position: 'absolute',
		top: 16,
		left: 16
	},
	name: {
		fontWeight: '600',
		fontSize: 16,
		color: '#1A051D'
	},
	des: {
		fontWeight: '500'
	},
	time: {
		fontSize: 14,
		color: '#6D5F6F',
		marginTop: 4
	},
	btnFlow: {
		width: 110,
		height: 40,
		borderRadius: 20,
		backgroundColor: '#6979F8',
		marginTop: 16,
		justifyContent: 'center',
		alignItems: 'center'
	},
	txtFlow: {
		fontSize: 14,
		color: 'white'
	},
	svgActive: {
		position: 'absolute',
		top: 33
	}
})
