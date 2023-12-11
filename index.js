import 'react-native-gesture-handler';
/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import UserData from './UserData';
import PharmacyData from './assignment6/src/PharmacyData';

AppRegistry.registerComponent(appName, () => PharmacyData);
