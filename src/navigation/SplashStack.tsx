import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SCREEN1, SCREEN2, SPLASH} from '../Util/Constant.ts';
import Splash from '../component/screen/Splash.tsx';
import AppNavigation from './AppNavigation.tsx';
import Screen1 from '../component/screen1/Screen1.tsx';
import Screen2 from '../component/screen/Screen2.tsx';

const Stack = createNativeStackNavigator();
export default function SplashStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={SPLASH} component={Splash} />
        <Stack.Screen name={SCREEN1} component={Screen1} />
        <Stack.Screen name={SCREEN2} component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
