import { styles } from './style'
import React, { useEffect, useState } from 'react'
import { Input } from './Components/Input/Input'
import { DateComponent } from './Components/Date/Date'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import { View, Text, TouchableOpacity } from 'react-native'
import SvgClose from '../../../../svgs/notification/SvgClose'
import SvgHover from '../../../../svgs/staticsHealth/SvgHover'
import SvgOption from '../../../../svgs/notification/SvgOption'
import { SelectDropdownCompo } from './Components/SelectDropdown/SelectDropdown'
import { connect } from 'react-redux'
import {
	fetchDataDepartment,
	fetchDataMunicipality
} from '../../../../redux/actions/actionContracts'
import { getTokenAndBusiness } from '../../../../utils/storage/getTokenAndBussines'

const typesContracts = [
	'Particular',
	'Salud',
	'Turismo',
	'Escolar',
	'Empresarial'
]
const dataTime = ['Contratante', 'Contrato']
const typesVehicles = ['HMV123', 'LKU345', 'DRT908', 'OPT654', 'OLE432']
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
const initialStateTwo = {
	numberOfContracts: '',
	income: '',
	typeContract: '',
	assignVehicle: '',
	assignFirstDriver: '',
	assignSecondDriver: '',
	assignThirdDriver: '',
	assignFourthDriver: '',
	objectOfContract: '',
	department: '',
	municipality: '',
	conventionName: '',
	startDate: '',
	endDate: '',
	detailOfContract: ''
}

const CreateContracts = ({ getDepartment, getMunicipality, actions }) => {
	const arrayDepartment = []
	const arrayMunicipality = []
	const navigation = useNavigation()
	const [open, setOpen] = useState(false)
	const [open1, setOpen1] = useState(false)
	const [textDate, setTextDate] = useState({
		textStartDate: 'fecha de inicio',
		textEndDate: 'fecha de fin'
	})
	const [date, setDate] = useState(new Date())
	const [date1, setDate1] = useState(new Date())
	const [MenuPurse, setMenuPurse] = useState('23%')
	const [departamentName, setDepartamentName] = useState('')
	const [inputsInTheView, setInputsInTheView] = useState(true)
	const [inputsGroupOne, setInputsGroupOne] = useState(initialState)
	const [inputsGroupTwo, setInputsGroupTwo] = useState(initialStateTwo)

	useEffect(() => {
		;(async () => {
			const { token, business } = await getTokenAndBusiness()
			await actions.fetchDataDepartmentAction({ token, business })
			if (departamentName) {
				const objId = getDepartment.filter(
					(obj) => obj.text === departamentName
				)
				actions.fetchDataMunicipalityAction({
					token,
					business,
					idDepartament: objId[0].value
				})
			}
		})()
	}, [departamentName])

	const handleChange = (name) => (value) => {
		setInputsGroupOne((state) => ({ ...state, [name]: value }))
	}
	const handleChangeTwo = (name) => (value) => {
		setInputsGroupTwo((state) => ({ ...state, [name]: value }))
	}
	const handleChangeSelect = (name, value) => {
		setInputsGroupTwo((state) => ({ ...state, [name]: value }))
	}
	const handleChangeTextDate = (name, value) => {
		setTextDate({ ...textDate, [name]: value })
	}
	const onSubmitDate = () => {
		console.log(inputsGroupOne)
		console.log(inputsGroupTwo)
		console.log('aqui se envian los datos')
	}

	getDepartment?.forEach((element) => {
		arrayDepartment.push(element.text)
	})
	getMunicipality?.forEach((element) => {
		arrayMunicipality.push(element.text)
	})

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
							name='numberOfContracts'
							handleChange={handleChangeTwo}
							label='Número de contrato'
						/>
						<Input
							name='income'
							handleChange={handleChangeTwo}
							label='Ingresos'
						/>
						<SelectDropdownCompo
							name='typeContract'
							handleChange={handleChangeSelect}
							label='Tipo de contrato'
							defaultButtonText='Tipo de contrato'
							arrayData={typesContracts}
						/>
						<SelectDropdownCompo
							name='assignVehicle'
							handleChange={handleChangeSelect}
							label='Asigna vehiculo'
							defaultButtonText='Asigna vehiculo'
							arrayData={typesVehicles}
						/>
						<Input
							name='assignFirstDriver'
							handleChange={handleChangeTwo}
							label='Asigna primer conductor'
						/>
						<Input
							name='assignSecondDriver'
							handleChange={handleChangeTwo}
							label='Asigna segundo conductor'
						/>
						<Input
							name='assignThirdDriver'
							handleChange={handleChangeTwo}
							label='Asigna tercer conductor'
						/>
						<Input
							name='assignFourthDriver'
							handleChange={handleChangeTwo}
							label='Asigna cuarto conductor '
						/>
						<Input
							name='objectOfContract'
							handleChange={handleChangeTwo}
							label='Objeto del contrato'
						/>
						<SelectDropdownCompo
							setDepartamentName={setDepartamentName}
							name='department'
							handleChange={handleChangeSelect}
							label='Departamento'
							defaultButtonText='Departamento'
							arrayData={arrayDepartment}
						/>
						<SelectDropdownCompo
							name='municipality'
							handleChange={handleChangeSelect}
							label='Municipio'
							defaultButtonText='Municipio'
							arrayData={arrayMunicipality}
						/>
						<Input
							name='conventionName'
							handleChange={handleChangeTwo}
							label='Nombre del convenio'
						/>
						<DateComponent
							nameInput='startDate'
							handleChangeSelect={handleChangeSelect}
							name='textStartDate'
							handleChangeTextDate={handleChangeTextDate}
							textLabel='fecha de inicio'
							text={textDate.textStartDate}
							open={open}
							date={date}
							setOpen={setOpen}
							setDate={setDate}
						/>
						<DateComponent
							nameInput='endDate'
							handleChangeSelect={handleChangeSelect}
							name='textEndDate'
							handleChangeTextDate={handleChangeTextDate}
							textLabel='fecha de fin'
							text={textDate.textEndDate}
							open={open1}
							date={date1}
							setOpen={setOpen1}
							setDate={setDate1}
						/>
						<Input
							name='detailOfContract'
							handleChange={handleChangeTwo}
							label='Detalles del contrato'
						/>
						<TouchableOpacity
							onPress={() => {
								onSubmitDate()
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

const mapDispatchToProps = (dispatch) => {
	return {
		actions: {
			fetchDataDepartmentAction: fetchDataDepartment(dispatch),
			fetchDataMunicipalityAction: fetchDataMunicipality(dispatch)
		}
	}
}

function mapStateToProps(state) {
	return {
		getDepartment: state.contractsReducer.getDepartment,
		getMunicipality: state.contractsReducer.getMunicipality
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateContracts)
