import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const Navigator = Stack.Navigator

const ROUTERS = {
	SigIn: 'SigIn',
	Onboarding: 'Onboarding',
	ForgotPassword: 'ForgotPassword'
}

const PROTECTEDROUTES = {
	Fuec: 'Fuec',
	Purse: 'Purse',
	Routes: 'Routes',
	Profile: 'Profile',
	MyLicense: 'MyLicense',
	Contracts: 'Contracts',
	Dashboard: 'Dashboard',
	Incidents: 'Incidents',
	Notification: 'Notification',
	CreateRoutes: 'CreateRoutes',
	CreateContracts: 'CreateContracts'
}

export { Stack, NavigationContainer, Navigator, ROUTERS, PROTECTEDROUTES }

export const navigationRef = React.createRef()
export function navigate(name, params) {
	navigationRef?.current?.navigate(name, params)
}
