import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import Orientation from 'react-native-orientation-locker';

// Orientation.lockToLandscape();
AppRegistry.registerComponent(appName, () => App);
