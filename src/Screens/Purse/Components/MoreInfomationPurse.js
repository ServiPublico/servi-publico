import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	StatusBar,
	ScrollView,
	StyleSheet
} from 'react-native'
import SvgBack from '../../../svgs/profile/SvgBack'
import SvgSetting from '../../../svgs/staticsHealth/SvgSetting'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import SvgAvatar from '../../../svgs/profile/SvgAvatar'

export const MoreInfomationPurse = () => {
	const route = useRoute()
	const navigation = useNavigation()
	const {
		cost,
		detail,
		payment_date,
		status_pay,
		type,
		updated_at,
		created_at
	} = route.params.data

	return (
		<View style={styles.container}>
			<StatusBar
				translucent={true}
				backgroundColor={'transparent'}
				barStyle={'light-content'}
			/>
			<View style={styles.header}>
				<Text style={styles.titleHead}>Mas informacion del pago</Text>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={styles.back}
				>
					<SvgBack />
				</TouchableOpacity>

				<TouchableOpacity style={styles.btnOption}>
					<SvgSetting />
				</TouchableOpacity>
			</View>
			<>
				<SvgAvatar style={styles.avatar} />
				<Text style={styles.name}>TOTAL A PAGAR: {cost}</Text>
				<Text style={styles.job}>{detail}</Text>
				<Text style={styles.job}>FECHA A PAGAR: {payment_date}</Text>
				<Text style={styles.job}>ESTADO: {status_pay}</Text>
				<Text style={styles.job}>{type}</Text>
				<Text style={styles.job}>ACTUALIZADO: {updated_at}</Text>
				<Text style={styles.job}>TIPO DE PAGO: {type}</Text>
				<Text style={styles.job}>FECHA DE CREACION: {created_at}</Text>
				<TouchableOpacity style={styles.btnUpdate}>
					<Text style={styles.txtUpdate}>PAGAR</Text>
				</TouchableOpacity>
				<View style={styles.containerInfo}>
					<View style={styles.col}>
						<Text style={styles.value}>3.890</Text>
						<Text style={styles.title}>Follower</Text>
					</View>
					<View style={styles.line} />
					<View style={styles.col}>
						<Text style={styles.value}>257</Text>
						<Text style={styles.title}>Project</Text>
					</View>
					<View style={styles.line} />
					<View style={styles.col}>
						<Text style={styles.value}>10.468</Text>
						<Text style={styles.title}>Loves</Text>
					</View>
				</View>
			</>
		</View>
	)
}

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F7F8F9',
		position: 'relative',
		width: '100%',
		height: '100%'
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
	titleHead: {
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
	back: {
		position: 'absolute',
		left: 16,
		top: getStatusBarHeight(true) + 10
	},
	avatar: {
		marginTop: getStatusBarHeight(true) + 10,
		alignSelf: 'center'
	},
	back: {
		position: 'absolute',
		left: 16,
		top: getStatusBarHeight(true) + 10
	},
	noti: {
		position: 'absolute',
		right: 16,
		top: getStatusBarHeight(true) + 10
	},
	name: {
		fontWeight: '500',
		fontSize: 18,
		color: '#1A051D',
		textAlign: 'center',
		marginTop: 8
	},
	job: {
		fontSize: 14,
		color: '#6D5F6F',
		textAlign: 'center',
		marginTop: 8
	},
	btnUpdate: {
		width: 160,
		height: 40,
		borderRadius: 20,
		backgroundColor: '#0084F4',
		marginTop: 16,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center'
	},
	txtUpdate: {
		fontSize: 13,
		color: '#FFF'
	},
	containerInfo: {
		flexDirection: 'row',
		paddingHorizontal: 24,
		marginTop: 20,
		marginBottom: 32
	},
	col: {
		alignItems: 'center',
		flex: 1
	},
	value: {
		fontSize: 20,
		color: '#1A051D'
	},
	title: {
		fontSize: 12,
		color: '#6D5F6F'
	}
})
