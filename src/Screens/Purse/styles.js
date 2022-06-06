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
		height: '10%',
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
	item: {
		marginHorizontal: 16,
		marginTop: 16,
		backgroundColor: '#FFF',
		paddingLeft: 17,
		paddingTop: 20,
		paddingBottom: 13,
		borderRadius: 16
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
		fontWeight: '500',
		color: '#47B32D'
	},
	time: {
		fontSize: 14,
		color: '#2D88B3',

		marginTop: 4
	},
	total: {
		fontSize: 14,
		color: 'black',
		marginTop: 4
	},
	btnFlow: {
		width: 120,
		height: 40,
		borderRadius: 20,
		backgroundColor: '#0084F4',
		marginTop: 16,
		justifyContent: 'center',
		alignItems: 'center'
	},
	txtFlow: {
		fontSize: 15,
		color: '#ffff'
	},
	svgActive: {
		position: 'absolute',
		right: 10,
		top: 33
	}
})
