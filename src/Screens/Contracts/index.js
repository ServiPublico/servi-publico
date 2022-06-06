import { styles } from './styles'
import { connect } from 'react-redux'
import React, { useEffect, useRef } from 'react'
import { NavFooter } from '../../Components/NavFooter'
import { PROTECTEDROUTES } from '../../utils/navigation'
import { ScrollView } from 'react-native-gesture-handler'
// import SvgOption from '../../svgs/staticsHealth/SvgOptions'
// import SvgSetting from '../../svgs/staticsHealth/SvgSetting'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity, StatusBar, Animated } from 'react-native'
import { fetchDataContracts } from '../../redux/actions/actionContracts'
import { getTokenAndBusiness } from '../../utils/storage/getTokenAndBussines'
import LottieView from 'lottie-react-native'
import lottie from '../../utils/lottie'

export const Contracts = ({ dataContracts, actions }) => {
	const navigation = useNavigation()
	const route = useRoute()
	const progress = useRef(new Animated.Value(0)).current

	const onPressCreateContract = () => {
		navigation.navigate(PROTECTEDROUTES.CreateContracts)
	}

	useEffect(() => {
		;(async () => {
			const { token, business } = await getTokenAndBusiness()
			await actions.fetchDataContracts({ token, business })
		})()
	}, [])

	useEffect(() => {
		Animated.loop(
			Animated.timing(progress, {
				duration: 2000,
				toValue: 1,
				useNativeDriver: true
			})
		).start()
	}, [])

	return (
		<View style={{ width: '100%', height: '100%' }}>
			<StatusBar
				translucent={true}
				backgroundColor={'transparent'}
				barStyle={'light-content'}
			/>
			<View style={styles.header}>
				<Text style={styles.title}>Contratos</Text>
				{/* <TouchableOpacity onPress={() => onOpen()} style={styles.btnClose}>
					<SvgOption />
				</TouchableOpacity> */}
				{/* <TouchableOpacity style={styles.btnOption}>
					<SvgSetting />
				</TouchableOpacity> */}
			</View>
			<TouchableOpacity
				onPress={onPressCreateContract}
				style={styles.btnUpdate}
			>
				<Text style={styles.txtUpdate}>Crear contrato</Text>
			</TouchableOpacity>

			<View style={{ width: '100%', height: '73%' }}>
				<ScrollView>
					{dataContracts.length <= 0 ? (
						<>
							<View>
								<View
									style={{
										height: 200,
										justifyContent: 'center'
									}}
								>
									<LottieView
										progress={progress}
										autoplay
										loop={true}
										source={lottie.lottieFiles.animation}
									/>
								</View>
								<Text style={{ padding: 10, textAlign: 'center' }}>
									POR EL MOMENTO NO HAY CONTRATOS QUE MOSTRAR
								</Text>
							</View>
						</>
					) : (
						<>
							{dataContracts?.data?.map((data, i) => (
								<React.Fragment key={i}>
									<View style={styles.item}>
										<Text style={styles.name}>
											<Text style={styles.des}>{data?.contractor?.c_name}</Text>
										</Text>
										<Text style={styles.time}>fecha: {data?.end_date}</Text>
										<Text style={styles.total}>Object: {data?.object}</Text>
										<TouchableOpacity
											onPress={() =>
												navigation.navigate(PROTECTEDROUTES.Routes, {
													idContract: data.contractor_id
												})
											}
											style={[styles.btnFlow, { marginTop: 10 }]}
										>
											<Text style={styles.txtFlow}>Rutas</Text>
										</TouchableOpacity>
									</View>
								</React.Fragment>
							))}
						</>
					)}
				</ScrollView>
			</View>
			<NavFooter route={route.name} />
		</View>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: { fetchDataContracts: fetchDataContracts(dispatch) }
	}
}

function mapStateToProps(state) {
	return {
		dataContracts: state.contractsReducer.dataContracts
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Contracts)
