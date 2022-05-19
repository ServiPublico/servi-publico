import { styles } from './styles'
import { ROUTERS } from '../../utils/navigation'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { getDataContracts } from './Api/getDataContracts'
import SvgOption from '../../svgs/staticsHealth/SvgOptions'
import SvgSetting from '../../svgs/staticsHealth/SvgSetting'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, Text, TouchableOpacity, StatusBar } from 'react-native'

export const Contracts = ({ onOpen }) => {
	const [dataApi, setDataApi] = useState(null)
	const navigation = useNavigation()
	const getTokenAndBusiness = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem('token')
			const business = await AsyncStorage.getItem('business')
			return {
				token: jsonValue != null ? JSON.parse(jsonValue) : null,
				business: business != null ? JSON.parse(business) : null
			}
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
			const { token, business } = getTokenAndBusiness()
			const data = await getDataContracts({
				token,
				business
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
