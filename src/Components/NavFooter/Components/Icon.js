import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Svg, { G, Path } from 'react-native-svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'

export const IconNav = ({ flag, route, text }) => {
	const naviagtion = useNavigation()

	return (
		<TouchableOpacity
			onPress={() => {
				naviagtion.navigate(route)
			}}
			style={{
				flex: 2,
				padding: 5,
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<View>
				{flag ? (
					<StarIcon />
				) : (
					<Text style={{ textAlign: 'center' }}>{text}</Text>
				)}
			</View>
		</TouchableOpacity>
	)
}

export const StarIcon = () => {
	return (
		<Svg width={'29'} height={'29'} viewBox='0 0 24 24'>
			<G fill-rule='evenodd' clip-rule='evenodd'>
				<Path
					fill='gray'
					d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
				/>
			</G>
		</Svg>
	)
}
