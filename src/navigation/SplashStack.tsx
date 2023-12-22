import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from '../component/screen1/Screen1.tsx';
import Screen2 from '../component/screen/Screen2.tsx';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SCREEN1, SPLASH} from '../Util/Constant.ts';
import Splash from '../component/screen/Splash.tsx';

const Stack = createNativeStackNavigator();
export default function AppStackScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={SPLASH} component={Splash} />
        <Stack.Screen name={SCREEN1} component={Screen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
