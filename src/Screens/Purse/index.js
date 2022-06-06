import {
	View,
	Text,
	TouchableOpacity,
	StatusBar,
	ScrollView,
	Animated
} from 'react-native'
import { styles } from './styles'
import { connect } from 'react-redux'
import lottie from '../../utils/lottie'
import LottieView from 'lottie-react-native'
import { NavFooter } from '../../Components/NavFooter'
import { fetchData } from '../../redux/actions/action'
import SvgHover from '../../svgs/staticsHealth/SvgHover'
import { PROTECTEDROUTES } from '../../utils/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { getTokenAndBusiness } from '../../utils/storage/getTokenAndBussines'

const dataTime = ['No pago', 'Parcialmente pago', 'Pago completo']
const urlParms = ['No+Pago', 'Parcialmente+Pago', 'Pago+completo']

const Purse = ({ dataPymes, actions, onOpen }) => {
	const navigation = useNavigation()
	const [MenuPurse, setMenuPurse] = useState('14%')
	const [numParam, setnumParam] = useState(0)
	const progress = useRef(new Animated.Value(0)).current

	const route = useRoute()
	useEffect(() => {
		;(async () => {
			const { token, business } = await getTokenAndBusiness()
			await actions.fetchDataAction({
				token,
				business,
				paramasUrl: urlParms[numParam]
			})
		})()
	}, [numParam])

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
		<View style={{ position: 'relative', width: '100%', height: '100%' }}>
			<StatusBar
				translucent={true}
				backgroundColor={'transparent'}
				barStyle={'light-content'}
			/>
			<View style={styles.header}>
				<Text style={styles.title}>Cartera</Text>
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
			<View style={{ width: '100%', height: '70%' }}>
				<ScrollView>
					{dataPymes.length !== 0 ? (
						<>
							{dataPymes?.map((data, i) => (
								<React.Fragment key={i}>
									<View style={styles.item}>
										<Text style={styles.name}>
											<Text style={styles.des}>{data?.detail}</Text>
										</Text>
										<Text style={styles.time}>fecha: {data?.payment_date}</Text>
										<Text style={styles.total}>Total: {data?.cost}</Text>
										<View
											style={{
												flexDirection: 'row',
												justifyContent: 'flex-end',
												marginRight: 20
											}}
										>
											<TouchableOpacity
												onPress={() =>
													navigation.navigate(
														PROTECTEDROUTES.MoreInfomationPurse,
														{
															data
														}
													)
												}
												style={styles.btnFlow}
											>
												<Text style={styles.txtFlow}>Ver mas</Text>
											</TouchableOpacity>
										</View>
									</View>
								</React.Fragment>
							))}
						</>
					) : (
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
									POR EL MOMENTO NO HAY PAGOS QUE MOSTRAR
								</Text>
							</View>
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
		actions: { fetchDataAction: fetchData(dispatch) }
	}
}
function mapStateToProps(state) {
	return {
		dataPymes: state.purseReducer.dataPymes
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Purse)
