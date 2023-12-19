import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from '../component/Screen1.tsx';
import {SCREEN1, SCREEN2, TAB1, TAB2} from '../Util/Constant.ts';
import Screen2 from '../component/Screen2.tsx';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1 from '../component/Tab1.tsx';
import Tab2 from '../component/Tab2.tsx';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

const Stack = createNativeStackNavigator();
export default function AppStackScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
