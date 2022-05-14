/**
 * @format
 */

import { AppRegistry } from 'react-native'

import { name as appName } from './app.json'
import { MainNavigation } from './src/Nav/MainNav'

AppRegistry.registerComponent(appName, () => MainNavigation)
