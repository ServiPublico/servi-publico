import { styles } from './style'
import { connect } from 'react-redux'
import lottie from '../../utils/lottie'
import LottieView from 'lottie-react-native'
import React, { useEffect, useRef } from 'react'
import { useRoute } from '@react-navigation/native'
import { NavFooter } from '../../Components/NavFooter'
import SvgOption from '../../svgs/staticsHealth/SvgOptions'
import SvgSetting from '../../svgs/staticsHealth/SvgSetting'
import { fetchDataIncidents } from '../../redux/actions/actionIncidents'
import { getTokenAndBusiness } from '../../utils/storage/getTokenAndBussines'
import { Text, View, StatusBar, TouchableOpacity, Animated } from 'react-native'

const Incidents = ({ dataIncidents, actions }) => {
	const route = useRoute()
	const progress = useRef(new Animated.Value(0)).current

	useEffect(() => {
		;(async () => {
			const { token, business } = await getTokenAndBusiness()
			await actions.fetchDataIncidentsAction({
				token,
				business
			})
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
				<Text style={styles.title}>INCIDENCIAS</Text>
				<TouchableOpacity onPress={() => onOpen()} style={styles.btnClose}>
					<SvgOption />
				</TouchableOpacity>
				<TouchableOpacity style={styles.btnOption}>
					<SvgSetting />
				</TouchableOpacity>
			</View>
			{dataIncidents.length === 0 ? (
				<View style={{}}>
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
						POR EL MOMENTO NO HAY INCIDENCIAS QUE MOSTRAR
					</Text>
				</View>
			) : (
				<View>
					<Text>HAY INFORMACION</Text>
				</View>
			)}
			<NavFooter route={route.name} />
		</View>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: { fetchDataIncidentsAction: fetchDataIncidents(dispatch) }
	}
}
function mapStateToProps(state) {
	return {
		dataIncidents: state.incidentsReducer.dataIncidents
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Incidents)
