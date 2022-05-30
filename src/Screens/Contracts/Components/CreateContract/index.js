import { styles } from './style'
import { Input } from './Components/Input/Input'
import React, { useEffect, useState } from 'react'
import { DateComponent } from './Components/Date/Date'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import { View, Text, TouchableOpacity } from 'react-native'
import SvgClose from '../../../../svgs/notification/SvgClose'
import SvgHover from '../../../../svgs/staticsHealth/SvgHover'
import SvgOption from '../../../../svgs/notification/SvgOption'
import { SelectDropdownCompo } from './Components/SelectDropdown/SelectDropdown'

const dataTime = ['Contratante', 'Contrato']

const typesContracts = [
	'Particular',
	'Salud',
	'Turismo',
	'Escolar',
	'Empresarial'
]
const initialState = {
	nitBussines: '',
	nameOfBussineContract: '',
	addresOffice: '',
	phoneNumber: '',
	email: '',
	webPage: '',
	nameContract: '',
	lastName: '',
	citizenshipCard: '',
	addres: '',
	numberOfPhone: ''
}

export const CreateContracts = ({ onOpen }) => {
	const navigation = useNavigation()
	const [MenuPurse, setMenuPurse] = useState('23%')
	const [inputsInTheView, setInputsInTheView] = useState(true)
	const [date, setDate] = useState(new Date())
	const [open, setOpen] = useState(false)
	const [date1, setDate1] = useState(new Date())
	const [open1, setOpen1] = useState(false)

	const [inputsGroupOne, setInputsGroupOne] = useState(initialState)

	const handleChange = (name) => (value) => {
		setInputsGroupOne((state) => ({ ...state, [name]: value }))
	}
	console.log(inputsGroupOne)
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
						<Input
							name='nitBussines'
							handleChange={handleChange}
							label='Nit empresa contratante'
						/>
						<Input
							name='nameOfBussineContract'
							handleChange={handleChange}
							label='Nombre de empresa contratante'
						/>
						<Input
							name='addresOffice'
							handleChange={handleChange}
							label='Dirección de oficina principal'
						/>
						<Input
							name='phoneNumber'
							handleChange={handleChange}
							label='telefono celular'
						/>
						<Input
							name='email'
							handleChange={handleChange}
							label='Correo electronico'
						/>
						<Input
							name='webPage'
							handleChange={handleChange}
							label='Pagina web'
						/>
						<Input
							name='nameContract'
							handleChange={handleChange}
							label='Nombre del contacto'
						/>
						<Input
							name='lastName'
							handleChange={handleChange}
							label='Apellido del contacto'
						/>
						<Input
							name='citizenshipCard'
							handleChange={handleChange}
							label='Numero de cedula de ciudadania'
						/>
						<Input
							name='addres'
							handleChange={handleChange}
							label='Direccion'
						/>
						<Input
							name='numberOfPhone'
							handleChange={handleChange}
							label='Numero de celular'
						/>
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
						<Input
							name='nitBussines'
							handleChange={handleChange}
							label='Número de contrato'
						/>
						<Input
							name='nitBussines'
							handleChange={handleChange}
							label='Ingresos'
						/>
						<SelectDropdownCompo
							label='Tipo de contrato'
							defaultButtonText='Tipo de contrato'
							arrayData={typesContracts}
						/>
						<SelectDropdownCompo
							label='Asigna vehiculo'
							defaultButtonText='Asigna vehiculo'
							arrayData={typesContracts}
						/>
						<Input
							name='nitBussines'
							handleChange={handleChange}
							label='Asigna primer conductor'
						/>
						<Input
							name='nitBussines'
							handleChange={handleChange}
							label='Asigna segundo conductor'
						/>
						<Input
							name='nitBussines'
							handleChange={handleChange}
							label='Asigna tercer conductor'
						/>
						<Input
							name='nitBussines'
							handleChange={handleChange}
							label='Asigna cuarto conductor '
						/>
						<Input
							name='nitBussines'
							handleChange={handleChange}
							label='Objeto del contrato'
						/>
						<SelectDropdownCompo
							label='Departamento'
							defaultButtonText='Departamento'
							arrayData={typesContracts}
						/>
						<SelectDropdownCompo
							label='Municipio'
							defaultButtonText='Municipio'
							arrayData={typesContracts}
						/>
						<Input
							name='nitBussines'
							handleChange={handleChange}
							label='Nombre del convenio'
						/>
						<DateComponent
							text='Fecha de inicio'
							open={open}
							date={date}
							setOpen={setOpen}
							setDate={setDate}
						/>
						<DateComponent
							text='Fecha de finalizado'
							open={open1}
							date={date1}
							setOpen={setOpen1}
							setDate={setDate1}
						/>
						<Input
							name='nitBussines'
							handleChange={handleChange}
							label='Detalles del contrato'
						/>
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
