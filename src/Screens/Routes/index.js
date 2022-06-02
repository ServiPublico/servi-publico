import { styles } from './style'
import { connect } from 'react-redux'
import { postRoute } from './Apis/postRoute'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import SvgOption from '../../svgs/notification/SvgOption'
import { ScrollView } from 'react-native-gesture-handler'
import { fetchDataRoutes } from '../../redux/actions/actionRoutes'
import { Text, View, StatusBar, TouchableOpacity } from 'react-native'
import { getTokenAndBusiness } from '../../utils/storage/getTokenAndBussines'
import { Input } from '../Contracts/Components/CreateContract/Components/Input/Input'

const initialInputs = {
	centerFrom: '',
	centerTo: '',
	routeDetails: '',
	departureLocation: '',
	arrivalLocation: ''
}

const Routes = ({ dataRoutes, actions }) => {
	const navigation = useNavigation()
	const route = useRoute()
	const { idContract } = route.params
	const [flag, setFlag] = useState(false)
	const [inputs, setInputs] = useState(initialInputs)

	useEffect(() => {
		;(async () => {
			const { token, business } = await getTokenAndBusiness()
			await actions.fetchDataRoutesAction({
				token,
				business,
				idContract
			})
		})()
	}, [flag])

	const handleChange = (name) => (value) => {
		setInputs((state) => ({ ...state, [name]: value }))
	}

	const onSubmitDate = async () => {
		const { token, business } = await getTokenAndBusiness()
		await postRoute({
			business,
			BearerToken: token,
			idContract,
			obj1: inputs
		})
		setFlag(!flag)
	}

	return (
		<View>
			<StatusBar
				translucent={true}
				backgroundColor={'transparent'}
				barStyle={'light-content'}
			/>
			<View style={styles.header}>
				<Text style={styles.title}>Routes</Text>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={styles.btnClose}
				>
					<SvgOption />
				</TouchableOpacity>
			</View>
			<View style={{ backgroundColor: 'white', padding: 2, margin: 10 }}>
				<Input
					value={inputs.departureLocation}
					name='departureLocation'
					handleChange={handleChange}
					label='Desde'
				/>
				<Input
					value={inputs.arrivalLocation}
					name='arrivalLocation'
					handleChange={handleChange}
					label='Hasta'
				/>
				<Input
					value={inputs.routeDetails}
					name='routeDetails'
					handleChange={handleChange}
					label='detalle de la ruta'
				/>
				<View style={styles.containerSignIn}>
					<TouchableOpacity style={styles.btnSignIn} onPress={onSubmitDate}>
						<Text style={styles.txtSignIn}>Crear Ruta</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View>
				<Text style={{ textAlign: 'center' }}>Rutas</Text>
				<ScrollView>
					{dataRoutes?.map((data, i) => (
						<React.Fragment key={i}>
							<View style={{ padding: 10 }}>
								<Text>Desde: {data.from}</Text>
								<Text>Hasta: {data.to}</Text>
							</View>
						</React.Fragment>
					))}
				</ScrollView>
			</View>
		</View>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: { fetchDataRoutesAction: fetchDataRoutes(dispatch) }
	}
}

function mapStateToProps(state) {
	return {
		dataRoutes: state.routesReducer.dataRoutes
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
