import {View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TAB1, TAB2} from '../Util/Constant.ts';
import Tab1 from './Tab1.tsx';
import Tab2 from './Tab2.tsx';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Screen1 = () => {
  const navigation = useNavigation();
  const Tab = createBottomTabNavigator();
  return (
    <View style={{flex: 1, alignContent: 'center'}}>
      <Tab.Navigator>
        <Tab.Screen name={TAB1} component={Tab1}></Tab.Screen>
        <Tab.Screen name={TAB2} component={Tab2}></Tab.Screen>
      </Tab.Navigator>
    </View>
  );
};

export default Screen1;
