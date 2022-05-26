import React from 'react'
import { styles } from './style'
import { useRoute } from '@react-navigation/native'
import { NavFooter } from '../../Components/NavFooter'
import SvgOption from '../../svgs/staticsHealth/SvgOptions'
import SvgSetting from '../../svgs/staticsHealth/SvgSetting'
import { Text, View, StatusBar, TouchableOpacity } from 'react-native'

export const Fuec = () => {
	const route = useRoute()

	return (
		<View style={{ width: '100%', height: '100%' }}>
			<StatusBar
				translucent={true}
				backgroundColor={'transparent'}
				barStyle={'light-content'}
			/>
			<View style={styles.header}>
				<Text style={styles.title}>Fuec</Text>
				<TouchableOpacity style={styles.btnClose}>
					<SvgOption />
				</TouchableOpacity>
				<TouchableOpacity style={styles.btnOption}>
					<SvgSetting />
				</TouchableOpacity>
			</View>
			<NavFooter route={route.name} />
		</View>
	)
}
