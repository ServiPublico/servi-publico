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
import SvgBack from '../../svgs/profile/SvgBack'
import SvgActive from '../../svgs/notification/SvgActive'
import SvgClient5 from '../../svgs/profile/SvgClient5'
const resetInputs = {
	centerFrom: '',
	centerTo: '',
	routeDetails: '',
	departureLocation: '',
	arrivalLocation: ''
}
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
	const [flagInputs, setFlagInputs] = useState(false)
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
		console.log(inputs)
		if (inputs.departureLocation === '' || inputs.departureLocation === '') {
			setFlagInputs(true)
		} else {
			await postRoute({
				business,
				BearerToken: token,
				idContract,
				obj1: inputs
			})
			setInputs(resetInputs)
		}
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
				<Text style={styles.title}>Rutas</Text>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={styles.btnClose}
				>
					<SvgBack />
				</TouchableOpacity>
			</View>
			<View style={{ backgroundColor: 'white', padding: 2, margin: 10 }}>
				<Input
					value={inputs.departureLocation}
					name='departureLocation'
					handleChange={handleChange}
					label='Desde'
				/>
				{flagInputs && (
					<Text style={{ color: 'red', marginLeft: 16 }}>
						debes llenar este campo con alemnos 3 caracteres{' '}
					</Text>
				)}
				<Input
					value={inputs.arrivalLocation}
					name='arrivalLocation'
					handleChange={handleChange}
					label='Hasta'
				/>
				{flagInputs && (
					<Text style={{ color: 'red', marginLeft: 16 }}>
						debes llenar este campo con alemnos 3 caracteres{' '}
					</Text>
				)}
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
				<Text style={[styles.time, { textAlign: 'center' }]}>Rutas</Text>
				<ScrollView>
					{dataRoutes?.map((data, i) => (
						<React.Fragment key={i}>
							<View style={styles.item}>
								<SvgClient5 style={styles.avatar} />
								<Text style={styles.name}>
									<Text style={styles.des}>Desde: {data.from}</Text>
								</Text>
								<Text style={styles.name}>
									<Text style={styles.des}>Hasta: {data.to}</Text>
								</Text>
								<Text style={styles.time}>Descripcion {data.from}</Text>

								<TouchableOpacity style={styles.btnFlow}>
									<Text style={styles.txtFlow}>Eliminar ruta</Text>
								</TouchableOpacity>
								<SvgActive style={styles.svgActive} />
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
