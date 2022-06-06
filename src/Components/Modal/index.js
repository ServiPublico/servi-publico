import { styles } from './style'
import lottie from '../../utils/lottie'
import LottieView from 'lottie-react-native'
import React, { useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity, Animated } from 'react-native'

export const Modal = ({ message, route }) => {
	const navigation = useNavigation()
	const progress = useRef(new Animated.Value(0)).current

	useEffect(() => {
		Animated.loop(
			Animated.timing(progress, {
				duration: 2000,
				toValue: 1,
				useNativeDriver: true
			})
		).start()
	}, [])

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
					borderRadius: 20,
					backgroundColor: 'white',
					width: 300,
					height: 300,
					padding: 20
				}}
			>
				<View
					style={{
						height: 120,
						justifyContent: 'center'
					}}
				>
					<LottieView
						progress={progress}
						autoplay
						loop={true}
						source={lottie.lottieFiles.succes}
					/>
				</View>

				<Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '500' }}>
					{message}
				</Text>
				<View style={styles.containerSignIn}>
					<TouchableOpacity
						style={styles.btnSignIn}
						onPress={() => navigation.navigate(route)}
					>
						<Text style={styles.txtSignIn}>Ver los contratos</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}
