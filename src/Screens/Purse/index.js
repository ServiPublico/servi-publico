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
import { getApiPurse } from './Apis/useApiPurse'
import AsyncStorage from '@react-native-async-storage/async-storage'

const dataTime = ['No pago', 'Parcialmente pago', 'Pago completo']
const urlParms = ['No+Pago', 'Parcialmente+Pago', 'Pago+completo']

export const Purse = ({ onOpen }) => {
	const [dataApi, setDataApi] = useState(null)
	const [MenuPurse, setMenuPurse] = useState('14%')
	const [numParam, setnumParam] = useState(0)

	const getTokenAndBusiness = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem('token')
			const business = await AsyncStorage.getItem('business')
			return {
				token: jsonValue != null ? JSON.parse(jsonValue) : null,
				business: business != null ? JSON.parse(business) : null
			}
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		;(async () => {
			const { token, business } = await getTokenAndBusiness()
			const data = await getApiPurse({
				token,
				business,
				paramasUrl: urlParms[numParam]
			})
			setDataApi(data)
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
				{/* <TouchableOpacity style={styles.btnOption}>
					<SvgSetting />
				</TouchableOpacity> */}
			</View>

			<View style={styles.containerTime}>
				{dataTime.map((item, i) => (
					<React.Fragment key={i}>
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
					</React.Fragment>
				))}
				<SvgHover style={[styles.svgHover, { left: MenuPurse }]} />
			</View>
			<ScrollView>
				{dataApi?.map((data, i) => (
					<React.Fragment key={i}>
						<View style={styles.item}>
							<Text style={styles.name}>
								<Text style={styles.des}>{data?.detail}</Text>
							</Text>
							<Text style={styles.time}>fecha: {data?.payment_date}</Text>
							<Text style={styles.total}>Total: {data?.cost}</Text>
							<TouchableOpacity onPress={() => {}} style={styles.btnFlow}>
								<Text style={styles.txtFlow}>Ver mas </Text>
							</TouchableOpacity>
						</View>
					</React.Fragment>
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
