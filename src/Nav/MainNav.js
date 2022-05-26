import {
	Stack,
	ROUTERS,
	Navigator,
	navigationRef,
	PROTECTEDROUTES,
	NavigationContainer
} from '../utils/navigation'
import store from '../redux'
import React, { useEffect, useRef, useState } from 'react'
import { Provider } from 'react-redux'
import ScalingDrawer from 'react-native-scaling-drawer'

import { Fuec } from '../Screens/Fuec'
import { Beads } from '../Screens/Beads'
import Purse from '../Screens/Purse'
import { SigIn } from '../Screens/SigIn'
import { Routes } from '../Screens/Routes'
import { Profile } from '../Screens/Profile'
import { LeftMenu } from '../Screens/LeftMenu'
import { Incidents } from '../Screens/Incidents'
import Contracts from '../Screens/Contracts'
import { MyLicense } from '../Screens/MyLicense'
import { ForgotPass } from '../Screens/ForgotPass'
import { Notification } from '../Screens/Notification'
import { Walkthroughs } from '../Screens/Walkthroughs'
import { StaticsHealth } from '../Screens/StaticsHealth'
import { CreateRoutes } from '../Screens/Routes/CreateRoutes'
import { CreateContracts } from '../Screens/Contracts/Components/CreateContract'
import { getToken } from '../utils/storage/getTokenAndBussines'

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
	const getTokenState = async () => {
		const { token } = await getToken()
		console.log(token)
		return token
	}

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
						initialRouteName={
							getTokenState() === null ? ROUTERS.SigIn : ROUTERS.Onboarding
						}
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
							name={PROTECTEDROUTES.Dashboard}
							component={StaticsHealth}
							options={optionNavigator}
						/>

						<Stack.Screen
							name={ROUTERS.ForgotPassword}
							component={ForgotPass}
							options={optionNavigator}
						/>
						<Stack.Screen
							name={PROTECTEDROUTES.Profile}
							component={Profile}
							options={optionNavigator}
						/>
						<Stack.Screen
							name={PROTECTEDROUTES.Notification}
							component={Notification}
							options={optionNavigator}
						/>
						<Stack.Screen
							name={PROTECTEDROUTES.MyLicense}
							component={MyLicense}
							options={optionNavigator}
						/>
						<Stack.Screen
							options={optionNavigator}
							name={PROTECTEDROUTES.Purse}
						>
							{() => <Purse onOpen={onOpen} />}
						</Stack.Screen>
						<Stack.Screen
							options={optionNavigator}
							name={PROTECTEDROUTES.Contracts}
						>
							{() => <Contracts onOpen={onOpen} />}
						</Stack.Screen>
						<Stack.Screen
							options={optionNavigator}
							name={PROTECTEDROUTES.CreateContracts}
						>
							{() => <CreateContracts onOpen={onOpen} />}
						</Stack.Screen>
						<Stack.Screen
							options={optionNavigator}
							name={PROTECTEDROUTES.Routes}
						>
							{() => <Routes onOpen={onOpen} />}
						</Stack.Screen>
						<Stack.Screen
							options={optionNavigator}
							name={PROTECTEDROUTES.CreateRoutes}
						>
							{() => <CreateRoutes onOpen={onOpen} />}
						</Stack.Screen>
						<Stack.Screen options={optionNavigator} name={PROTECTEDROUTES.Fuec}>
							{() => <Fuec onOpen={onOpen} />}
						</Stack.Screen>
						<Stack.Screen
							options={optionNavigator}
							name={PROTECTEDROUTES.Beads}
						>
							{() => <Beads onOpen={onOpen} />}
						</Stack.Screen>
						<Stack.Screen
							options={optionNavigator}
							name={PROTECTEDROUTES.Incidents}
						>
							{() => <Incidents onOpen={onOpen} />}
						</Stack.Screen>
					</Navigator>
				</NavigationContainer>
			</ScalingDrawer>
		</Provider>
	)
}
