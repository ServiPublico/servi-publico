import React from 'react'
import { styles } from './style'
import { View } from 'react-native'
import { IconNav } from './Components/Icon'
import SvgHover from '../../svgs/staticsHealth/SvgHover'
import { PROTECTEDROUTES } from '../../utils/navigation'
import SvgPdf from '../../svgs/navFooter/SvgPdf'
import SvgContracts from '../../svgs/navFooter/SvgContracts'
import SvgBeginning from '../../svgs/navFooter/SvgBeginning'
import SvgPurse from '../../svgs/navFooter/SvgPurse'
import SvgIncidents from '../../svgs/navFooter/SvgIncidents'

export const NavFooter = ({ route }) => {
	return (
		<View
			style={{
				backgroundColor: 'white',
				position: 'absolute',
				bottom: 0,
				width: '100%',
				height: '8%',
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
					Icon={SvgPdf}
					flag={route === PROTECTEDROUTES.Fuec}
					route={PROTECTEDROUTES.Fuec}
					text='Fuec'
				/>
				<IconNav
					Icon={SvgContracts}
					flag={route === PROTECTEDROUTES.Contracts}
					route={PROTECTEDROUTES.Contracts}
					text='Contratos'
				/>
				<IconNav
					Icon={SvgBeginning}
					flag={route === PROTECTEDROUTES.Dashboard}
					route={PROTECTEDROUTES.Dashboard}
					text='Inicio'
				/>
				<IconNav
					Icon={SvgPurse}
					flag={route === PROTECTEDROUTES.Purse}
					route={PROTECTEDROUTES.Purse}
					text='Cartera'
				/>
				<IconNav
					Icon={SvgIncidents}
					flag={route === PROTECTEDROUTES.Incidents}
					route={PROTECTEDROUTES.Incidents}
					text='Incidencia'
				/>
				<SvgHover
					style={[
						styles.svgHover,
						{
							left:
								route === PROTECTEDROUTES.Fuec
									? '8%'
									: route === PROTECTEDROUTES.Contracts
									? '28%'
									: route === PROTECTEDROUTES.Dashboard
									? '48%'
									: route === PROTECTEDROUTES.Purse
									? '68%'
									: route === PROTECTEDROUTES.Incidents
									? '88%'
									: '8%'
						}
					]}
				/>
			</View>
		</View>
	)
}
