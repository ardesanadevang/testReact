import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SCREEN1} from '../../Util/Constant.ts';
import styles from '../../Util/styles.ts';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // TODO perform long working task here, then navigate to new screen
    setTimeout(() => {
      navigation.navigate(SCREEN1);
    }, 1000);
  }, []);

  return (
    <View style={[styles.splashContainer]}>
      <Text style={[styles.test]}>Splash screen</Text>
      {/*<SvgUri uri={'../../../assets/AppIcon.svg'} />*/}
    </View>
  );
};
export default Splash;
