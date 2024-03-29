import React, { useEffect, useState } from 'react'

import {
	View,
	StyleSheet,
	TouchableOpacity,
	Text,
	FlatList
} from 'react-native'

import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import SvgClose from '../../svgs/notification/SvgClose'
import SvgOption from '../../svgs/notification/SvgOption'
import SvgActive from '../../svgs/notification/SvgActive'
import SvgClient1 from '../../svgs/profile/SvgClient1'
// import SvgClient4 from '../../svgs/profile/SvgClient4'
// import SvgClient3 from '../../svgs/profile/SvgClient3'
// import SvgClient2 from '../../svgs/profile/SvgClient2'
// import SvgClient5 from '../../svgs/profile/SvgClient5'

import { useLicense } from './Hooks/useLicense'
import AsyncStorage from '@react-native-async-storage/async-storage'

const keyExtractor = (item) => item.id.toString()

export const MyLicense = ({ route }) => {
	const getToken = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem('token')
			const business = await AsyncStorage.getItem('business')
			return {
				token: jsonValue != null ? JSON.parse(jsonValue) : null,
				business: business != null ? JSON.parse(business) : null
			}
		} catch (e) {
			console.error(e)
		}
	}
	const { getLicense } = useLicense()

	const [data, setData] = useState(null)

	useEffect(() => {
		;(async () => {
			const { token, business } = await getToken()
			const res = await getLicense({ token, business })
			setData(res)
		})()
	}, [])

	const RenderItem = ({ item }) => {
		const { user } = item
		return (
			<View style={styles.item}>
				<SvgClient1 style={styles.avatar} />
				<Text style={styles.name}>
					<Text style={styles.des}>{user.full_name}</Text>
				</Text>
				<Text style={styles.name}>
					<Text style={styles.des}>{user.date_of_birth}</Text>
				</Text>
				<Text style={styles.time}>{user.role_old}</Text>
				<TouchableOpacity style={styles.btnFlow}>
					<Text style={styles.txtFlow}>Descargar</Text>
				</TouchableOpacity>
				<SvgActive style={styles.svgActive} />
			</View>
		)
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Mis licencias </Text>
				<TouchableOpacity style={styles.btnClose}>
					<SvgClose />
				</TouchableOpacity>
				<TouchableOpacity style={styles.btnOption}>
					<SvgOption />
				</TouchableOpacity>
			</View>
			{data?.length > 0 && (
				<FlatList
					data={data}
					renderItem={RenderItem}
					keyExtractor={keyExtractor}
				/>
			)}
		</View>
	)
}

// const dataNotis = [
// 	{
// 		id: 0,
// 		name: 'Luke Casey',
// 		des: 'like your project “Claka mobile app UI KIT”',
// 		Svg: SvgClient1,
// 		active: true,
// 		time: '48 mins ago'
// 	},
// 	{
// 		id: 1,
// 		name: 'Luella Norton',
// 		des: 'follow your works',
// 		Svg: SvgClient2,
// 		active: true,
// 		time: '6 hours ago',
// 		flow: true
// 	},
// 	{
// 		id: 2,
// 		name: 'Luella Norton',
// 		des: 'send you in a comment in project X',
// 		Svg: SvgClient3,
// 		active: true,
// 		reply: true,
// 		time: '2 days ago'
// 	},
// 	{
// 		id: 3,
// 		name: 'Luke Casey',
// 		des: 'like your project “Claka mobile app UI KIT”',
// 		Svg: SvgClient4,
// 		active: false,
// 		time: '48 mins ago'
// 	},
// 	{
// 		id: 4,
// 		name: 'Luke Casey',
// 		des: 'like your project “Claka mobile app UI KIT”',
// 		Svg: SvgClient5,
// 		active: false,
// 		time: '48 mins ago'
// 	},
// 	{
// 		id: 5,
// 		name: 'Luke Casey',
// 		des: 'like your project “Claka mobile app UI KIT”',
// 		Svg: SvgClient4,
// 		active: false,
// 		time: '48 mins ago'
// 	}
// ]

const styles = StyleSheet.create({
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
	item: {
		marginHorizontal: 16,
		marginTop: 16,
		backgroundColor: '#FFF',
		paddingLeft: 80,
		paddingTop: 20,
		paddingBottom: 16,
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
		fontWeight: '500'
	},
	time: {
		fontSize: 14,

		color: '#6D5F6F',
		marginTop: 4
	},
	btnFlow: {
		width: 120,
		height: 40,
		borderRadius: 20,
		backgroundColor: 'rgba(105,121,248,0.1)',
		marginTop: 16,
		justifyContent: 'center',
		alignItems: 'center'
	},
	txtFlow: {
		fontSize: 13,
		color: '#6979F8'
	},
	svgActive: {
		position: 'absolute',
		top: 33
	}
})
