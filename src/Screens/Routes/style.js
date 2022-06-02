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
	}
})
