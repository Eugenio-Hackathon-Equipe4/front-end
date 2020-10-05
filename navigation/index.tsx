import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import ClientTabNavigator from './ClientNavigator';

import Login from '../screens/Login';
import Cadastrar from '../screens/Cadastrar';
import Formulario from '../screens/Formulario';
import Mensagem from '../screens/Mensagem';
import Empreenda from '../screens/Empreenda';
import Bemestar from '../screens/Bemestar';
import Produtos from '../screens/Perfil';
import Pagamento from '../screens/Pagamento';

import Sacola from '../screens/Sacola';

import FormPerfil from '../screens/FormPerfil';

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
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} options={{ title: 'Vamos Começar!' }} />
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="Cadastrar" component={Cadastrar} />

      <Stack.Screen name="Formulario" component={Formulario} />
      <Stack.Screen name="FormPerfil" component={FormPerfil} />
      <Stack.Screen name="Mensagem" component={Mensagem} />
      <Stack.Screen name="Empreenda" component={Empreenda} />
      <Stack.Screen name="Bemestar" component={Bemestar} />

      <Stack.Screen name="Produtos" component={Produtos} />
      <Stack.Screen name="Sacola" component={Sacola} />
      <Stack.Screen name="Pagamento" component={Pagamento} />

      <Stack.Screen name="Client" component={ClientTabNavigator} />
      <Stack.Screen name="Loja" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
