import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StatusBar } from 'react-native'

import SvgOption from '../../svgs/staticsHealth/SvgOptions'
import SvgSetting from '../../svgs/staticsHealth/SvgSetting'

import { styles } from './styles'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { getDataContracts } from './Api/getDataContracts'
import { ROUTERS } from '../../utils/navigation'
import { useNavigation } from '@react-navigation/native'

export const Contracts = ({ onOpen }) => {
	const [dataApi, setDataApi] = useState(null)
	const navigation = useNavigation()
	const getToken = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem('token')
			return jsonValue != null ? JSON.parse(jsonValue) : null
		} catch (e) {
			// error reading value
			console.log(e)
		}
	}
	const onPressCreateContract = () => {
		navigation.navigate(ROUTERS.CreateContracts)
	}

	useEffect(() => {
		;(async () => {
			const data = await getDataContracts({
				token: await getToken()
			})
			setDataApi(data.data)
		})()
	}, [])

	return (
		<View>
			<StatusBar
				translucent={true}
				backgroundColor={'transparent'}
				barStyle={'light-content'}
			/>
			<View style={styles.header}>
				<Text style={styles.title}>Contratos</Text>
				<TouchableOpacity onPress={() => onOpen()} style={styles.btnClose}>
					<SvgOption />
				</TouchableOpacity>
				<TouchableOpacity style={styles.btnOption}>
					<SvgSetting />
				</TouchableOpacity>
			</View>
			<TouchableOpacity
				onPress={onPressCreateContract}
				style={styles.btnUpdate}
			>
				<Text style={styles.txtUpdate}>Crear contrato</Text>
			</TouchableOpacity>
			<View style={{ padding: 15 }}>
				{dataApi?.map((data) => (
					<>
						<Text>{data.contractor.c_name}</Text>
						<Text>{data.end_date}</Text>
						<Text>{data.object}</Text>
					</>
				))}
			</View>
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

// export default connect(mapStateToProps, mapDispatchToProps)(Contracts)
