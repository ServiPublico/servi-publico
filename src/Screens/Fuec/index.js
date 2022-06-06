import React, { useEffect, useRef, useState } from 'react'
import { styles } from './style'
import { useRoute } from '@react-navigation/native'
import { NavFooter } from '../../Components/NavFooter'
// import SvgOption from '../../svgs/staticsHealth/SvgOptions'
// import SvgSetting from '../../svgs/staticsHealth/SvgSetting'
import {
	Text,
	View,
	StatusBar,
	TouchableOpacity,
	ScrollView,
	Linking,
	Animated
} from 'react-native'
import {
	getTBusines,
	getTokenAndBusiness
} from '../../utils/storage/getTokenAndBussines'
import { fetchDataFuec } from '../../redux/actions/actionFuec'
import { connect } from 'react-redux'
import lottie from '../../utils/lottie'
import LottieView from 'lottie-react-native'

const Fuec = ({ dataFuec, actions }) => {
	const [bussines, setBussines] = useState('')
	const progress = useRef(new Animated.Value(0)).current

	const route = useRoute()

	useEffect(() => {
		;(async () => {
			const { token, business } = await getTokenAndBusiness()
			await actions.fetchDataAction({
				token,
				business
			})
			const bussines = await getTBusines()
			setBussines(bussines.business)
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
				<Text style={styles.title}>Fuec</Text>
				{/* <TouchableOpacity style={styles.btnClose}>
					<SvgOption />
				</TouchableOpacity> */}
				{/* <TouchableOpacity style={styles.btnOption}>
					<SvgSetting />
				</TouchableOpacity> */}
			</View>
			<View style={{ width: '100%', height: '81%' }}>
				<ScrollView>
					{dataFuec <= 0 ? (
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
									POR EL MOMENTO NO HAY FUECS QUE MOSTRAR
								</Text>
							</View>
						</>
					) : (
						<>
							{dataFuec?.map((data, i) => (
								<React.Fragment key={i}>
									<View style={styles.item}>
										<Text style={styles.name}>
											<Text style={styles.des}>{data?.details}</Text>
										</Text>
										<Text style={styles.time}>fecha: {data?.start_date}</Text>
										<Text style={styles.total}>
											Placa: {data?.vehicle?.car_plate}
										</Text>
										<Text style={styles.total}>{data?.object}</Text>

										{data.routes.length > 0 ? (
											<>
												<TouchableOpacity
													onPress={() => {
														if (bussines) {
															Linking.openURL(
																`https://${bussines}.servipublico.com/fuec/${data.id}/${data.user_id}`
															)
														}
													}}
													style={styles.btnFlow}
												>
													<Text style={styles.txtFlow}>Descagar </Text>
												</TouchableOpacity>
											</>
										) : (
											<Text style={[styles.des, { paddingTop: 10 }]}>
												Debes agregar una ruta para generar fuec
											</Text>
										)}
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
		actions: { fetchDataAction: fetchDataFuec(dispatch) }
	}
}
function mapStateToProps(state) {
	return {
		dataFuec: state.FuecReducer.dataFuec
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Fuec)
