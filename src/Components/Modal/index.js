import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export const Modal = ({ message, route }) => {
	const navigation = useNavigation()

	return (
		<View
			style={{
				position: 'absolute',
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
				backgroundColor: 'rgba(0,0,0,0.75)',
				width: '100%',
				height: '100%',
				zIndex: 2,
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<View
				style={{
					backgroundColor: 'white',
					width: 300,
					height: 300,
					padding: 20
				}}
			>
				<Text style={{ textAlign: 'center' }}>Servipublico</Text>
				<Text style={{ textAlign: 'center' }}>{message}</Text>
				<View style={{ justifyContent: 'center', flexDirection: 'row' }}>
					<TouchableOpacity
						onPress={() => navigation.navigate(route)}
						style={{
							marginTop: 30,
							backgroundColor: 'blue',
							padding: 10,
							width: '50%',
							justifyContent: 'center',
							borderRadius: 10
						}}
					>
						<Text
							style={{
								textAlign: 'center',
								color: 'white',
								fontSize: 16,
								fontWeight: '600'
							}}
						>
							ir a ver la ruta
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}
