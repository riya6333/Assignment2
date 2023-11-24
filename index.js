import 'react-native-gesture-handler';
/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

// import App from './ApiCalling';
import AppLogin from './Assignment5/AppLogin';
import App from './ApiCalling';

AppRegistry.registerComponent(appName, () => AppLogin);
