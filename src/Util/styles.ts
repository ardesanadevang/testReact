import {StyleSheet} from 'react-native';
import {appBackgroundColor} from './colors.ts';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: appBackgroundColor,
    flexDirection: 'row',
  },
  test: {
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
  },
});
