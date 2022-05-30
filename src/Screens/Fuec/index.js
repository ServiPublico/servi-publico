import React, { useEffect } from 'react'
import { styles } from './style'
import { useRoute } from '@react-navigation/native'
import { NavFooter } from '../../Components/NavFooter'
import SvgOption from '../../svgs/staticsHealth/SvgOptions'
import SvgSetting from '../../svgs/staticsHealth/SvgSetting'
import {
	Text,
	View,
	StatusBar,
	TouchableOpacity,
	ScrollView
} from 'react-native'
import { getTokenAndBusiness } from '../../utils/storage/getTokenAndBussines'
import { fetchDataFuec } from '../../redux/actions/actionFuec'
import { connect } from 'react-redux'

const Fuec = ({ dataFuec, actions, onOpen }) => {
	const route = useRoute()
	useEffect(() => {
		;(async () => {
			const { token, business } = await getTokenAndBusiness()
			await actions.fetchDataAction({
				token,
				business
			})
		})()
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
				<TouchableOpacity style={styles.btnClose}>
					<SvgOption />
				</TouchableOpacity>
				<TouchableOpacity style={styles.btnOption}>
					<SvgSetting />
				</TouchableOpacity>
			</View>
			<ScrollView>
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
							<TouchableOpacity onPress={() => {}} style={styles.btnFlow}>
								<Text style={styles.txtFlow}>Descagar </Text>
							</TouchableOpacity>
						</View>
					</React.Fragment>
				))}
			</ScrollView>
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
