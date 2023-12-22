import {Button, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Screen2 = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Screen2</Text>
      <Button
        title={'Screen1'}
        onPress={() => navigation.navigate('Screen1')}
      />
    </View>
  );
};
export default Screen2;
