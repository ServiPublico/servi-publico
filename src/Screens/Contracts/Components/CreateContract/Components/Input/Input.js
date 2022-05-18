import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export const Input = ({ label }) => {
	return (
		<View>
			<View style={{ marginHorizontal: 23, marginTop: 7 }}>
				<Text style={styles.txtTime}>{label}</Text>
			</View>
			<View style={[styles.contentInput, { marginTop: 10 }]}>
				<TextInput
					style={styles.input}
					placeholder='contrato'
					placeholderTextColor={'#ABA4AC'}
					secureTextEntry={false}
				/>
			</View>
		</View>
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
		flex: 1,
		fontSize: 15,
		padding: 0,
		margin: 0
	}
})
