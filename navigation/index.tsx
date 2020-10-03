import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import ClientTabNavigator from './ClientNavigator';

import Login from '../screens/Login';

import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, headerStyle: { backgroundColor: '#ff7c34' }, headerTitleAlign: 'center', headerTintColor: '#fff' }}>
      <Stack.Screen name="Login" component={Login} options={{ title: 'Vamos Começar!' }} />
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="Client" component={ClientTabNavigator} />
      <Stack.Screen name="Loja" component={ClientTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
