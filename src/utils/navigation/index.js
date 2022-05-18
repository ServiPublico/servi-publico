import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const Navigator = Stack.Navigator

const ROUTERS = {
	Onboarding: 'Onboarding',
	SigIn: 'SigIn',
	ForgotPassword: 'ForgotPassword',
	Profile: 'Profile',
	Notification: 'Notification',
	Dashboard: 'Dashboard',
	MyLicense: 'MyLicense',
	Purse: 'Purse',
	Contracts: 'Contracts',
	CreateContracts: 'CreateContracts'
}

export { Stack, NavigationContainer, Navigator, ROUTERS }

export const navigationRef = React.createRef()
export function navigate(name, params) {
	navigationRef?.current?.navigate(name, params)
}
