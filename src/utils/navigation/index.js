import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const Navigator = Stack.Navigator
const Screen = Stack.Screen

const ROUTERS = {
	Onboarding: 'Onboarding',
	SigIn: 'SigIn',
	ForgotPassword: 'ForgotPassword',
	Profile: 'Profile',
	Notification: 'Notification',
	Dashboard: 'Dashboard'
}

export { Stack, NavigationContainer, Navigator, Screen, ROUTERS }

export const navigationRef = React.createRef()
export function navigate(name, params) {
	navigationRef?.current?.navigate(name, params)
}
