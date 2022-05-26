import React from 'react'
import { styles } from './style'
import { View } from 'react-native'
import { IconNav } from './Components/Icon'
import SvgHover from '../../svgs/staticsHealth/SvgHover'
import { PROTECTEDROUTES } from '../../utils/navigation'

export const NavFooter = ({ route }) => {
	return (
		<View
			style={{
				backgroundColor: 'white',
				position: 'absolute',
				bottom: 0,
				width: '100%',
				height: 100,
				borderRadius: 20,
				zIndex: 10
			}}
		>
			<View
				style={{
					borderRadius: 20,
					flexDirection: 'row',
					height: '65%'
				}}
			>
				<IconNav
					flag={route === PROTECTEDROUTES.Dashboard}
					route={PROTECTEDROUTES.Dashboard}
					text='Inicio'
				/>
				<IconNav
					flag={route === PROTECTEDROUTES.Purse}
					route={PROTECTEDROUTES.Purse}
					text='Cartera'
				/>
				<IconNav
					flag={route === PROTECTEDROUTES.Contracts}
					route={PROTECTEDROUTES.Contracts}
					text='Contratos'
				/>
				<IconNav
					flag={route === PROTECTEDROUTES.Fuec}
					route={PROTECTEDROUTES.Fuec}
					text='Fuec'
				/>
				<IconNav
					flag={route === PROTECTEDROUTES.Routes}
					route={PROTECTEDROUTES.Routes}
					text='Rutas'
				/>
				<SvgHover
					style={[
						styles.svgHover,
						{
							left:
								route === PROTECTEDROUTES.Dashboard
									? '8%'
									: route === PROTECTEDROUTES.Purse
									? '28%'
									: route === PROTECTEDROUTES.Contracts
									? '48%'
									: route === PROTECTEDROUTES.Fuec
									? '68%'
									: route === PROTECTEDROUTES.Routes
									? '88%'
									: '8%'
						}
					]}
				/>
			</View>
		</View>
	)
}
