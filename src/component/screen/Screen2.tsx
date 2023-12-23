import {Button, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SCREEN1} from '../../Util/Constant.ts';

const Screen2 = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Screen2</Text>
    </View>
  );
};
export default Screen2;
