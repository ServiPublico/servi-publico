import React, { useRef } from 'react'
import ScalingDrawer from 'react-native-scaling-drawer'

import {
	NavigationContainer,
	navigationRef,
	Navigator,
	ROUTERS,
	Screen
} from '../utils/navigation'

import { SigIn } from '../Screens/SigIn'
import { LeftMenu } from '../Screens/LeftMenu'
import { Walkthroughs } from '../Screens/Walkthroughs'
import { StaticsHealth } from '../Screens/StaticsHealth'
import { ForgotPass } from '../Screens/ForgotPass'
import { Profile } from '../Screens/Profile'
import { Notification } from '../Screens/Notification'

const optionNavigator = {
	headerShown: false,
	gesturesEnabled: false
}

const defaultScalingDrawerConfig = {
	scalingFactor: 0.8,
	minimizeFactor: 0.8,
	swipeOffset: 30,
	frontStyle: {
		shadowOffset: {
			width: 0,
			height: 0
		},
		shadowColor: '#FFF',
		shadowOpacity: 0,
		shadowRadius: 0
	}
}

export const MainNavigation = () => {
	const drawer = useRef()
	const onClose = () => {
		drawer.current?.close()
	}
	const onOpen = () => {
		drawer.current?.open()
	}

	return (
		<ScalingDrawer
			ref={drawer}
			content={<LeftMenu onClose={onClose} onOpen={onOpen} />}
			{...defaultScalingDrawerConfig}
		>
			<NavigationContainer ref={navigationRef}>
				<Navigator
					screenOptions={{
						headerShown: false,
						gestureEnabled: false
					}}
					initialRouteName={ROUTERS.Onboarding}
				>
					<Screen
						name={ROUTERS.Onboarding}
						component={Walkthroughs}
						options={optionNavigator}
					/>
					<Screen
						name={ROUTERS.SigIn}
						component={SigIn}
						options={optionNavigator}
					/>
					<Screen
						name={ROUTERS.Dashboard}
						component={StaticsHealth}
						options={optionNavigator}
					/>

					<Screen
						name={ROUTERS.ForgotPassword}
						component={ForgotPass}
						options={optionNavigator}
					/>
					<Screen
						name={ROUTERS.Profile}
						component={Profile}
						options={optionNavigator}
					/>
					<Screen
						name={ROUTERS.Notification}
						component={Notification}
						options={optionNavigator}
					/>
				</Navigator>
			</NavigationContainer>
		</ScalingDrawer>
	)
}
