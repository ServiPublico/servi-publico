import React, { useState } from 'react'
import {
	View,
	Button,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity
} from 'react-native'
import DatePicker from 'react-native-date-picker'

export const DateComponent = ({ text, open, date, setOpen, setDate }) => {
	return (
		<>
			<View style={{ marginHorizontal: 23, marginTop: 7 }}>
				<Text>fecha de inicio</Text>
			</View>
			<View style={[styles.contentInput, { marginTop: 10 }]}>
				<TouchableOpacity style={styles.input} onPress={() => setOpen(true)}>
					<Text>{text}</Text>
				</TouchableOpacity>
			</View>
			<DatePicker
				modal
				open={open}
				date={date}
				mode='date'
				theme='dark'
				onConfirm={(date) => {
					setOpen(false)
					setDate(date)
				}}
				onCancel={() => {
					setOpen(false)
				}}
			/>
		</>
	)
}
const styles = StyleSheet.create({
	contentInput: {
		marginHorizontal: 20,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#1A051D',
		height: 48,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 16
	},
	input: {
		justifyContent: 'center',
		width: '100%',
		height: '100%',
		fontSize: 15,
		padding: 0,
		margin: 0
	},
	txtTime: {
		fontSize: 15,
		color: '#1A051D'
	}
})
