/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import loginPage from './src/screens/Home/registration';


AppRegistry.registerComponent(appName, () => loginPage);
