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
	btnUpdate: {
		width: 160,
		height: 40,
		borderRadius: 20,
		backgroundColor: '#6979F8',
		marginTop: 16,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center'
	},
	txtUpdate: {
		fontSize: 13,
		color: '#FFF'
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
	boxStatus: {
		margin: 16,
		backgroundColor: '#FFA26B',
		borderRadius: 16,
		paddingTop: 20,
		paddingLeft: 24,
		paddingBottom: 23
	},
	txtGood: {
		fontSize: 20,
		color: '#FFF',

		fontWeight: '500'
	},
	txtKeep: {
		fontSize: 16,
		color: '#FFF'
	},
	boxHeader: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	containerChart: {
		borderRadius: 16,
		backgroundColor: '#FFF',
		paddingHorizontal: 16,
		paddingTop: 16,
		marginHorizontal: 16,
		marginBottom: 16
	},
	txtTitle: {
		marginLeft: 8,

		fontSize: 14,
		color: '#1A051D',
		flex: 1
	},
	line: {
		height: 1,
		backgroundColor: '#F7F8F9',
		borderRadius: 16
	},
	boxBottom: {
		flexDirection: 'row'
	},
	btnBottom: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 12
	},
	txtBtnBottom: {
		fontSize: 14,
		color: '#ABA4AC'
	},
	txtBtnBottomActive: {
		fontSize: 14,
		color: '#0084F4'
	},
	lineVertical: {
		width: 1,
		backgroundColor: '#F7F8F9',
		borderRadius: 16
	}
})
