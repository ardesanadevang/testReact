import {Button, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Screen1 = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Screen1</Text>
      <Button
        title={'Screen2'}
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
};

export default Screen1;
