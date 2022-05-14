import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export const IconNav = () => {
	return (
		<TouchableOpacity
			style={{
				flex: 2,
				padding: 5,
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<View>
				<View>
					<Text>Icono</Text>
				</View>
				<Text style={{ textAlign: 'center' }}>inicio</Text>
			</View>
		</TouchableOpacity>
	)
}
