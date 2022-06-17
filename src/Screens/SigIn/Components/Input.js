import React, { memo, useCallback, useState } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'

import SvgEyes from '../../../svgs/signIn/SvgEyes'

export const Input = (props) => {
	const [secure, setSecure] = useState(props.pass)

	const onPressIn = useCallback(() => {
		setSecure(false)
	}, [])

	const onPressOut = useCallback(() => {
		setSecure(true)
	}, [])
	return (
		<View
			style={[
				styles.container,
				{
					marginTop: props.mt,
					borderColor: props.colorBorder
				}
			]}
		>
			<TextInput
				value={props.value}
				style={[styles.input, {}]}
				placeholder={props.placeholder}
				placeholderTextColor={'#ABA4AC'}
				secureTextEntry={secure}
				onChangeText={props.handleChange(props.placeholder)}
			/>
			{props.pass && (
				<TouchableOpacity onPressIn={onPressIn} onPressOut={onPressOut}>
					<SvgEyes />
				</TouchableOpacity>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 40,
		borderRadius: 24,
		borderWidth: 1,
		borderColor: '#EAE8EA',
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
