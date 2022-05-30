import {
	View,
	Text,
	TouchableOpacity,
	StatusBar,
	ScrollView
} from 'react-native'
import { styles } from './styles'
import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { NavFooter } from '../../Components/NavFooter'
import { fetchData } from '../../redux/actions/action'
import SvgHover from '../../svgs/staticsHealth/SvgHover'
import SvgOption from '../../svgs/staticsHealth/SvgOptions'
import SvgSetting from '../../svgs/staticsHealth/SvgSetting'
import { getTokenAndBusiness } from '../../utils/storage/getTokenAndBussines'

const dataTime = ['No pago', 'Parcialmente pago', 'Pago completo']
const urlParms = ['No+Pago', 'Parcialmente+Pago', 'Pago+completo']

const Purse = ({ dataPymes, actions, onOpen }) => {
	const [MenuPurse, setMenuPurse] = useState('14%')
	const [numParam, setnumParam] = useState(0)
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

	return (
		<View style={{ position: 'relative', width: '100%', height: '100%' }}>
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
				{dataPymes?.map((data, i) => (
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
