import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './src/app.json';
// import SoundPlayer from 'react-native-sound-player';

// try {
//   SoundPlayer.setup();
// } catch (error) {
//   console.log('Error initializing SoundPlayer: ', error);
// }

AppRegistry.registerComponent(appName, () => App);
