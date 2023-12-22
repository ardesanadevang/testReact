import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from '../component/screen1/Screen1.tsx';
import Screen2 from '../component/screen/Screen2.tsx';
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
