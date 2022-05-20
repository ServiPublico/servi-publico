import React from 'react'

import { Text, View, StatusBar, TouchableOpacity } from 'react-native'
import { styles } from './style'

export const CreateRoutes = () => {
	return (
		<View>
			<StatusBar
				translucent={true}
				backgroundColor={'transparent'}
				barStyle={'light-content'}
			/>
			<View style={styles.header}>
				<Text style={styles.title}>CreateRoutes</Text>
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
