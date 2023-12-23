import {StyleSheet} from 'react-native';
import {appBackgroundColor} from './colors.ts';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  splashContainer: {
    flex: 1,
    backgroundColor: appBackgroundColor,
  },
  splashIconContainer: {
    flex: 1,
    alignSelf: 'center',
    width: '60%',
    height: '60%',
  },
});
