import { styles } from './style'
import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { NavFooter } from '../../Components/NavFooter'
import SvgOption from '../../svgs/staticsHealth/SvgOptions'
import SvgSetting from '../../svgs/staticsHealth/SvgSetting'
import { Text, View, StatusBar, TouchableOpacity } from 'react-native'
import { fetchDataIncidents } from '../../redux/actions/actionIncidents'
import { getTokenAndBusiness } from '../../utils/storage/getTokenAndBussines'

const Incidents = ({ dataIncidents, actions }) => {
	const route = useRoute()
	useEffect(() => {
		;(async () => {
			const { token, business } = await getTokenAndBusiness()
			await actions.fetchDataIncidentsAction({
				token,
				business
			})
		})()
	}, [])
	console.log(dataIncidents)
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
				<View>
					<Text> POR EL MOMENTO NO HAY INCIDENCIAS QUE MOSTRAR </Text>
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
