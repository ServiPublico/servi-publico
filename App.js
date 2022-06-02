/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import store from './src/redux'
import { Provider } from 'react-redux'
import MainNavigation from './src/Nav/MainNav'

const App = () => {
	return (
		<Provider store={store}>
			<MainNavigation />
		</Provider>
	)
}

export default App
