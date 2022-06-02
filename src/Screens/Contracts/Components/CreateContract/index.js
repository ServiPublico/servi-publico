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
	fetchDataDriverVehicle,
	fetchDataMunicipality,
	fetchDataVehicle
} from '../../../../redux/actions/actionContracts'
import { getTokenAndBusiness } from '../../../../utils/storage/getTokenAndBussines'
import { postDataContract } from '../../Api/postDataContract'
import { Modal } from '../../../../Components/Modal'
import { PROTECTEDROUTES } from '../../../../utils/navigation'

const typesContracts = [
	'Particular',
	'Salud',
	'Turismo',
	'Escolar',
	'Empresarial'
]
const dataTime = ['Contratante', 'Contrato']
const initialState = {
	nitBussines: '12435678',
	nameOfBussineContract: 'Atalaya',
	addresOffice: 'carrera43c#68asur-32',
	phoneNumber: '3225713623',
	email: 'camilo@gmail.com',
	webPage: 'atalaya.com',
	nameContact: 'diego',
	lastNameContac: 'gonzalez',
	citizenshipCard: '1039865545',
	addres: 'calle69sur#46a14',
	numberOfPhone: '3052934567'
}
const initialStateTwo = {
	numberOfContracts: '29999999',
	income: '1.200.00',
	typeContract: '',
	assignVehicle: '',
	assignFirstDriver: 'diego gonzalez',
	assignSecondDriver: '',
	assignThirdDriver: '',
	assignFourthDriver: '',
	objectOfContract: 'trasporte de vehiculos',
	department: '',
	municipality: '',
	conventionName: 'convenio de tranporte',
	startDate: '',
	endDate: '',
	detailOfContract: 'solo sera por un mes '
}

const CreateContracts = ({
	getDepartment,
	getMunicipality,
	getVehicles,
	getDriverVehicle,
	actions
}) => {
	const arrayDepartment = []
	const arrayMunicipality = []
	const arrayVehicles = []
	const arrayDriversVehicle = []
	const navigation = useNavigation()
	const [open, setOpen] = useState(false)
	const [open1, setOpen1] = useState(false)
	const [textDate, setTextDate] = useState({
		textStartDate: 'fecha de inicio',
		textEndDate: 'fecha de fin'
	})
	const [date, setDate] = useState(new Date())
	const [date1, setDate1] = useState(new Date())
	const [idVehicle, setidVehicle] = useState(null)
	const [MenuPurse, setMenuPurse] = useState('23%')
	const [departamentName, setDepartamentName] = useState('')
	const [inputsInTheView, setInputsInTheView] = useState(true)
	const [inputsGroupOne, setInputsGroupOne] = useState(initialState)
	const [inputsGroupTwo, setInputsGroupTwo] = useState(initialStateTwo)
	const [flagModal, setflagModal] = useState(false)
	useEffect(() => {
		;(async () => {
			const { token, business } = await getTokenAndBusiness()
			await actions.fetchDataDepartmentAction({ token, business })
			await actions.fetchDataVehiclesAction({ token, business })
			if (departamentName) {
				const objId = getDepartment.filter(
					(obj) => obj.text === departamentName
				)
				await actions.fetchDataMunicipalityAction({
					token,
					business,
					idDepartament: objId[0].value
				})
			}
			if (idVehicle) {
				await actions.fetchDataDriverVehiclesAction({
					token,
					business,
					idVehicle
				})
			}
		})()
	}, [departamentName, idVehicle])

	const handleChange = (name) => (value) => {
		setInputsGroupOne((state) => ({ ...state, [name]: value }))
	}
	const handleChangeTwo = (name) => (value) => {
		setInputsGroupTwo((state) => ({ ...state, [name]: value }))
	}
	const handleChangeSelect = (name, value) => {
		if (name === 'assignVehicle') {
			const { id } = getVehicles.find((element) => element.car_plate === value)
			setidVehicle(id)
			setInputsGroupTwo((state) => ({ ...state, [name]: id }))
		} else if (name === 'department') {
			const IdDepartment = getDepartment.find(
				(element) => element.text === value
			)
			setInputsGroupTwo((state) => ({ ...state, [name]: IdDepartment.value }))
		} else if (name === 'municipality') {
			const IdMunicipality = getMunicipality.find(
				(element) => element.text === value
			)
			setInputsGroupTwo((state) => ({
				...state,
				[name]: IdMunicipality.value
			}))
		} else if (
			name === 'assignFirstDriver' ||
			name === 'assignSecondDriver' ||
			name === 'assignThirdDriver' ||
			name === 'assignFourthDriver'
		) {
			const IdDriver = getDriverVehicle.find(
				(element) => element.full_name === value
			)
			setInputsGroupTwo((state) => ({ ...state, [name]: IdDriver.id }))
		} else {
			setInputsGroupTwo((state) => ({ ...state, [name]: value }))
		}
	}
	const handleChangeTextDate = (name, value) => {
		const valueStr = value.split('T')
		setTextDate({ ...textDate, [name]: valueStr[0] })
	}

	const onSubmitDate = async () => {
		const { token, business } = await getTokenAndBusiness()
		const responsePost = await postDataContract({
			business,
			BearerToken: token,
			obj1: inputsGroupOne,
			obj2: inputsGroupTwo
		})
		if (responsePost.succes) {
			setflagModal(true)
		}
	}

	getDepartment?.forEach((element) => {
		arrayDepartment.push(element.text)
	})
	getMunicipality?.forEach((element) => {
		arrayMunicipality.push(element.text)
	})
	getVehicles?.forEach((element) => {
		arrayVehicles.push(element.car_plate)
	})
	getDriverVehicle?.forEach((element) => {
		arrayDriversVehicle.push(element.full_name)
	})

	return (
		<View style={styles.container}>
			{flagModal && (
				<Modal
					message='Se a creado el contrato de manera correcta'
					route={PROTECTEDROUTES.Contracts}
				/>
			)}
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
							value={inputsGroupOne.nitBussines}
							name='nitBussines'
							handleChange={handleChange}
							label='Nit empresa contratante'
						/>
						<Input
							value={inputsGroupOne.nameOfBussineContract}
							name='nameOfBussineContract'
							handleChange={handleChange}
							label='Nombre de empresa contratante'
						/>
						<Input
							value={inputsGroupOne.addresOffice}
							name='addresOffice'
							handleChange={handleChange}
							label='Dirección de oficina principal'
						/>
						<Input
							value={inputsGroupOne.phoneNumber}
							name='phoneNumber'
							handleChange={handleChange}
							label='telefono celular'
						/>
						<Input
							value={inputsGroupOne.email}
							name='email'
							handleChange={handleChange}
							label='Correo electronico'
						/>
						<Input
							value={inputsGroupOne.webPage}
							name='webPage'
							handleChange={handleChange}
							label='Pagina web'
						/>
						<Input
							value={inputsGroupOne.nameContact}
							name='nameContact'
							handleChange={handleChange}
							label='Nombre del contacto'
						/>
						<Input
							value={inputsGroupOne.lastNameContac}
							name='lastNameContac'
							handleChange={handleChange}
							label='Apellido del contacto'
						/>
						<Input
							value={inputsGroupOne.citizenshipCard}
							name='citizenshipCard'
							handleChange={handleChange}
							label='Numero de cedula de ciudadania'
						/>
						<Input
							value={inputsGroupOne.addres}
							name='addres'
							handleChange={handleChange}
							label='Direccion'
						/>
						<Input
							value={inputsGroupOne.numberOfPhone}
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
							value={inputsGroupTwo.numberOfContracts}
							name='numberOfContracts'
							handleChange={handleChangeTwo}
							label='Número de contrato'
						/>
						<Input
							value={inputsGroupTwo.income}
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
							arrayData={arrayVehicles}
						/>
						<SelectDropdownCompo
							name='assignFirstDriver'
							handleChange={handleChangeSelect}
							defaultButtonText='primer conductor'
							arrayData={arrayDriversVehicle}
							label='Asigna primer conductor'
						/>
						<SelectDropdownCompo
							name='assignSecondDriver'
							handleChange={handleChangeSelect}
							defaultButtonText='segundo conductor'
							arrayData={arrayDriversVehicle}
							label='Asigna segundo conductor'
						/>
						<SelectDropdownCompo
							name='assignThirdDriver'
							handleChange={handleChangeSelect}
							defaultButtonText='tercer conductor'
							arrayData={arrayDriversVehicle}
							label='Asigna tercer conductor'
						/>
						<SelectDropdownCompo
							name='assignFourthDriver'
							handleChange={handleChangeSelect}
							defaultButtonText='cuarto conductor'
							arrayData={arrayDriversVehicle}
							label='Asigna cuarto conductor'
						/>

						<Input
							value={inputsGroupTwo.objectOfContract}
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
							value={inputsGroupTwo.conventionName}
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
							value={inputsGroupTwo.detailOfContract}
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
			fetchDataMunicipalityAction: fetchDataMunicipality(dispatch),
			fetchDataVehiclesAction: fetchDataVehicle(dispatch),
			fetchDataDriverVehiclesAction: fetchDataDriverVehicle(dispatch)
		}
	}
}

function mapStateToProps(state) {
	return {
		getDepartment: state.contractsReducer.getDepartment,
		getMunicipality: state.contractsReducer.getMunicipality,
		getVehicles: state.contractsReducer.getVehicles,
		getDriverVehicle: state.contractsReducer.getDriverVehicle
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateContracts)
