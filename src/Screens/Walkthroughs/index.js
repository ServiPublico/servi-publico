import React, { useCallback, useState } from 'react'
import {
	Dimensions,
	StyleSheet,
	TouchableOpacity,
	View,
	Text,
	StatusBar
} from 'react-native'
import SvgLogo from '../../svgs/walkthroughs/SvgLogo'
import Carousel, { Pagination } from 'react-native-snap-carousel'

import SvgIntro1 from '../../svgs/walkthroughs/SvgIntro1'
import SvgIntro2 from '../../svgs/walkthroughs/SvgIntro2'
import SvgIntro3 from '../../svgs/walkthroughs/SvgIntro3'
import { PROTECTEDROUTES, ROUTERS } from '../../utils/navigation'

const { width: viewportWidth } = Dimensions.get('window')

function wp(percentage) {
	const value = (percentage * viewportWidth) / 100
	return Math.round(value)
}

const slideHeight = '100%'
const slideWidth = wp(80)
const itemHorizontalMargin = wp(2)
export const sliderWidth = viewportWidth
export const itemWidth = slideWidth + itemHorizontalMargin * 2

const data = [
	{
		color: '#00C48C',
		Svg: SvgIntro1,
		textTitle: 'Gestiona Documentos',
		descrip: 'Podrás generar y descargar fuecs de forma rápida y sencilla'
	},
	{
		color: '#0F4C81',
		Svg: SvgIntro2,
		textTitle: 'Realiza pagos y mas',
		descrip:
			'De forma fácil y sencilla podrás conocer el estado de tus cuentas y realizar pagos'
	},
	{
		color: '#6979F8',
		Svg: SvgIntro3,
		textTitle: 'Organiza tus rutas y planifica tu viaje',
		descrip: ''
	}
]

export const Walkthroughs = ({ navigation }) => {
	const [indexActive, setIndex] = useState(0)

	const onPress = () => {
		navigation.navigate(ROUTERS.SigIn)
	}

	const renderItem = useCallback(({ item }) => {
		const Svg = item.Svg
		return (
			<View style={[styles.item, { backgroundColor: item.color }]}>
				<Svg style={styles.svgIntro} />
				<Text style={styles.title}>{item.textTitle}</Text>
				<Text style={styles.des}>{item.descrip}</Text>
			</View>
		)
	}, [])

	return (
		<View style={styles.container}>
			<StatusBar
				translucent={true}
				backgroundColor={'transparent'}
				barStyle={'dark-content'}
			/>
			<View style={styles.header}>
				<Text style={{ fontSize: 25, color: 'black', fontWeight: '800' }}>
					SERVIPUBLICO
				</Text>
				<Pagination
					dotsLength={4}
					activeDotIndex={indexActive}
					dotStyle={styles.dotStyle}
					inactiveDotStyle={styles.inactiveDotStyle}
					containerStyle={styles.containerStyle}
					inactiveDotScale={1}
				/>
			</View>
			<View style={styles.boxCarousel}>
				<Carousel
					data={data}
					renderItem={renderItem}
					sliderWidth={sliderWidth}
					itemWidth={itemWidth}
					inactiveSlideScale={0.94}
					inactiveSlideOpacity={0.7}
					containerCustomStyle={styles.slider}
					contentContainerCustomStyle={styles.sliderContentContainer}
					onSnapToItem={setIndex}
				/>
			</View>

			<TouchableOpacity style={styles.btnSignIn} onPress={onPress}>
				<Text style={styles.txtSignIn}>Sign In</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	slider: {
		marginTop: 15,
		height: '80%',
		overflow: 'hidden', // for custom animations
		padding: 0,
		margin: 0
	},
	sliderContentContainer: {
		paddingVertical: 10 // for custom animation
	},
	dotStyle: {
		width: 8,
		height: 8,
		borderRadius: 4,
		marginHorizontal: 0,
		backgroundColor: '#0F4C81'
	},
	inactiveDotStyle: {
		width: 8,
		height: 8,
		borderRadius: 4,
		marginHorizontal: 0,
		backgroundColor: '#6D5F6F'
	},
	containerStyle: {
		padding: 0,
		margin: 0,
		paddingHorizontal: 0,
		paddingVertical: 0
	},
	container: {
		flex: 1,
		backgroundColor: '#FFF'
	},
	header: {
		flexDirection: 'row',
		marginTop: 56,
		paddingHorizontal: 24,
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	boxCarousel: {
		flex: 1
	},
	btnSignIn: {
		backgroundColor: '#1A051D',
		borderRadius: 24,
		marginHorizontal: 45,
		height: 48,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 24,
		marginBottom: 50
	},
	txtSignIn: {
		color: '#FBFBFB',
		fontSize: 17,
		fontWeight: '600'
	},
	item: {
		borderRadius: 16,
		backgroundColor: '#00C48C',
		width: itemWidth,
		height: slideHeight,
		paddingHorizontal: itemHorizontalMargin,
		overflow: 'hidden',
		justifyContent: 'center'
	},
	svgIntro: {
		alignSelf: 'center'
	},
	title: {
		color: '#FFF',
		fontSize: 18,
		marginTop: 50,
		marginLeft: 24,
		marginRight: 16
	},
	des: {
		fontSize: 16,
		color: '#FFFFFF',
		marginTop: 16,
		marginLeft: 24,
		marginRight: 16
	}
})
