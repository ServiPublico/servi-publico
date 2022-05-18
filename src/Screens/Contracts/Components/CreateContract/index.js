import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'

import SvgOption from '../../../../svgs/notification/SvgOption'
import SvgClose from '../../../../svgs/notification/SvgClose'

import { styles } from './style'
import SvgHover from '../../../../svgs/staticsHealth/SvgHover'
import { useNavigation } from '@react-navigation/native'
import { Input } from './Components/Input/Input'
import { ScrollView } from 'react-native-gesture-handler'
const dataTime = ['Contratante', 'Contrato']

export const CreateContracts = ({ onOpen }) => {
	const navigation = useNavigation()
	const [MenuPurse, setMenuPurse] = useState('23%')
	const [inputsInTheView, setInputsInTheView] = useState(true)
	useEffect(() => {}, [])

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Crear Contrato</Text>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={styles.btnClose}
				>
					<SvgClose />
				</TouchableOpacity>
				<TouchableOpacity style={styles.btnOption}>
					<SvgOption />
				</TouchableOpacity>
			</View>
			<View style={styles.containerTime}>
				{dataTime.map((item, i) => (
					<TouchableOpacity
						onPress={() => {
							setMenuPurse(i === 0 ? '23%' : '73%')
							setInputsInTheView(i === 0 ? true : false)
						}}
						style={styles.btnTime}
						key={item}
					>
						<Text style={styles.txtTime}>{item}</Text>
					</TouchableOpacity>
				))}
				<SvgHover style={[styles.svgHover, { left: MenuPurse }]} />
			</View>
			<ScrollView style={{ marginBottom: 30 }}>
				{inputsInTheView ? (
					<>
						<Input label='Nit empresa contratante' />
						<Input label='Dirección de oficina principal' />
						<Input label='Correo electronico' />
						<Input label='Nombre del contacto' />
						<Input label='Numero de cedula de ciudadania' />
						<Input label='Numero de celular' />
						<Input label='Nombre de empresa contratante' />
						<Input label='telefono celular' />
						<Input label='Pagina web' />
						<Input label='Apellido del contacto' />
						<Input label='Direccion' />
						<TouchableOpacity
							onPress={() => {
								setMenuPurse('73%')
								setInputsInTheView(false)
							}}
							style={styles.btnUpdate}
						>
							<Text style={styles.txtUpdate}>Siguiente</Text>
						</TouchableOpacity>
					</>
				) : (
					<>
						<Input label='Número de contrato' />
						<Input label='Ingresos' />
						<Input label='Tipo de contrato' />
						<Input label='Asigna vehiculo' />
						<Input label='Asigna primer conductor' />
						<Input label='Asigna segundo conductor' />
						<Input label='Asigna tercer conductor' />
						<Input label='Asigna cuarto conductor ' />
						<Input label='Objeto del contrato' />
						<Input label='Departamento' />
						<Input label='Municipio' />
						<Input label='Nombre del convenio' />
						<Input label='Fecha de inicio' />
						<Input label='Fecha de finalizado' />
						<Input label='Detalles del contrato' />
						<TouchableOpacity
							onPress={() => {
								setMenuPurse('23%')
								setInputsInTheView(true)
							}}
							style={styles.btnUpdate}
						>
							<Text style={styles.txtUpdate}>Terminar</Text>
						</TouchableOpacity>
					</>
				)}
			</ScrollView>
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

// export default connect(mapStateToProps, mapDispatchToProps)(CreateContracts)
