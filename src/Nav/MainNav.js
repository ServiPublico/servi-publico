import React, { useRef } from 'react'
import ScalingDrawer from 'react-native-scaling-drawer'

import { Provider } from 'react-redux'
import store from '../store'

import {
	Stack,
	ROUTERS,
	Navigator,
	navigationRef,
	NavigationContainer
} from '../utils/navigation'

import { Purse } from '../Screens/Purse'
import { SigIn } from '../Screens/SigIn'
import { Profile } from '../Screens/Profile'
import { LeftMenu } from '../Screens/LeftMenu'
import { Contracts } from '../Screens/Contracts'
import { MyLicense } from '../Screens/MyLicense'
import { ForgotPass } from '../Screens/ForgotPass'
import { Notification } from '../Screens/Notification'
import { Walkthroughs } from '../Screens/Walkthroughs'
import { StaticsHealth } from '../Screens/StaticsHealth'
import { CreateContracts } from '../Screens/Contracts/Components/CreateContract'

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
		<Provider store={store}>
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
						<Stack.Screen
							name={ROUTERS.Onboarding}
							component={Walkthroughs}
							options={optionNavigator}
						/>
						<Stack.Screen
							name={ROUTERS.SigIn}
							component={SigIn}
							options={optionNavigator}
						/>
						<Stack.Screen
							name={ROUTERS.Dashboard}
							component={StaticsHealth}
							options={optionNavigator}
						/>

						<Stack.Screen
							name={ROUTERS.ForgotPassword}
							component={ForgotPass}
							options={optionNavigator}
						/>
						<Stack.Screen
							name={ROUTERS.Profile}
							component={Profile}
							options={optionNavigator}
						/>
						<Stack.Screen
							name={ROUTERS.Notification}
							component={Notification}
							options={optionNavigator}
						/>
						<Stack.Screen
							name={ROUTERS.MyLicense}
							component={MyLicense}
							options={optionNavigator}
						/>
						<Stack.Screen options={optionNavigator} name={ROUTERS.Purse}>
							{() => <Purse onOpen={onOpen} />}
						</Stack.Screen>
						<Stack.Screen options={optionNavigator} name={ROUTERS.Contracts}>
							{() => <Contracts onOpen={onOpen} />}
						</Stack.Screen>
						<Stack.Screen
							options={optionNavigator}
							name={ROUTERS.CreateContracts}
						>
							{() => <CreateContracts onOpen={onOpen} />}
						</Stack.Screen>
					</Navigator>
				</NavigationContainer>
			</ScalingDrawer>
		</Provider>
	)
}
