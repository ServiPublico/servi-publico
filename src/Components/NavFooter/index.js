import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { IconNav } from './Components/Icon'

export const NavFooter = () => {
	return (
		<View
			style={{
				backgroundColor: 'white',

				position: 'absolute',
				bottom: 0,
				width: '95%',
				height: 70,
				marginHorizontal: 10,
				marginBottom: '7%',
				borderRadius: 20
			}}
		>
			<View style={{ flex: 1, flexDirection: 'row' }}>
				<IconNav />
				<IconNav />
				<IconNav />
				<IconNav />
				<IconNav />
			</View>
		</View>
	)
}
