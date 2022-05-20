import React from 'react'
import { Text, View, StatusBar, TouchableOpacity } from 'react-native'
import SvgOption from '../../svgs/notification/SvgOption'
import SvgSetting from '../../svgs/staticsHealth/SvgSetting'
import { styles } from './style'

export const Incidents = () => {
	return (
		<View>
			<StatusBar
				translucent={true}
				backgroundColor={'transparent'}
				barStyle={'light-content'}
			/>
			<View style={styles.header}>
				<Text style={styles.title}>Incidents</Text>
				{/* <TouchableOpacity onPress={() => onOpen()} style={styles.btnClose}>
					<SvgOption />
				</TouchableOpacity> */}
				{/* <TouchableOpacity style={styles.btnOption}>
					<SvgSetting />
				</TouchableOpacity> */}
			</View>
		</View>
	)
}
