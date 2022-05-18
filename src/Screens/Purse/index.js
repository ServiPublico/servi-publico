import React, { useEffect, useState } from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	StatusBar,
	ScrollView
} from 'react-native'

import SvgOption from '../../svgs/staticsHealth/SvgOptions'
import SvgSetting from '../../svgs/staticsHealth/SvgSetting'
import SvgHover from '../../svgs/staticsHealth/SvgHover'

import { styles } from './styles'
import { connect, useDispatch } from 'react-redux'
import { fetchData } from '../../store/action'
import { getApiPurse } from './Apis/useApiPurse'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SvgAvatar from '../../svgs/profile/SvgAvatar'
import SvgActive from '../../svgs/notification/SvgActive'

const dataTime = ['No pago', 'Parcialmente pago', 'Pago completo']
const urlParms = ['No+Pago', 'Parcialmente+Pago', 'Pago+completo']

export const Purse = ({ onOpen }) => {
	const [dataApi, setDataApi] = useState(null)
	const [MenuPurse, setMenuPurse] = useState('14%')
	const [numParam, setnumParam] = useState(0)

	const getToken = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem('token')
			return jsonValue != null ? JSON.parse(jsonValue) : null
		} catch (e) {
			// error reading value
			console.log(e)
		}
	}

	useEffect(() => {
		;(async () => {
			const data = await getApiPurse({
				token: await getToken(),
				paramasUrl: urlParms[numParam]
			})
			setDataApi(data)
			console.log(data)
		})()
	}, [numParam])

	return (
		<View>
			<StatusBar
				translucent={true}
				backgroundColor={'transparent'}
				barStyle={'light-content'}
			/>
			<View style={styles.header}>
				<Text style={styles.title}>Cartera</Text>
				<TouchableOpacity onPress={() => onOpen()} style={styles.btnClose}>
					<SvgOption />
				</TouchableOpacity>
				<TouchableOpacity style={styles.btnOption}>
					<SvgSetting />
				</TouchableOpacity>
			</View>

			<View style={styles.containerTime}>
				{dataTime.map((item, i) => (
					<TouchableOpacity
						onPress={() => {
							setMenuPurse(i === 0 ? '14%' : i === 1 ? '47%' : '80%')
							setnumParam(i)
						}}
						style={styles.btnTime}
						key={item}
					>
						<Text style={styles.txtTime}>{item}</Text>
					</TouchableOpacity>
				))}
				<SvgHover style={[styles.svgHover, { left: MenuPurse }]} />
			</View>
			<ScrollView>
				{dataApi?.map((data) => (
					<View style={styles.item}>
						<Text style={styles.name}>
							<Text style={styles.des}>{data.detail}</Text>
						</Text>
						<Text style={styles.time}>fecha: {data.payment_date}</Text>
						<Text style={styles.total}>Total: {data.cost}</Text>
						<TouchableOpacity style={styles.btnFlow}>
							<Text style={styles.txtFlow}>Ver mas </Text>
						</TouchableOpacity>
					</View>
				))}
			</ScrollView>
		</View>
	)
}

// const mapStateToProps = (state) => {
// 	return {
// 		dataPymes: state.first.dataPymes
// 	}
// }

// const mapDispatchToProps = {
// 	fetchData
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Purse)
