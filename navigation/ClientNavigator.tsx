import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import MapaConsultora from '../screens/MapaConsultora';
import Home from '../screens/HomeCliente';
import Perfil from '../screens/Perfil';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabProdutosParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>

      <BottomTab.Screen
        name="Home"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="MeuMapa"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabOneStack = createStackNavigator<TabOneParamList>();
function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={MapaConsultora}
        options={{ headerTitle: 'Encontre sua Consultora', headerShown: false }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();
function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={Home}
        options={{ headerTitle: 'Home', headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabProductStack = createStackNavigator<TabProdutosParamList>();
function TabThreeNavigator() {
  return (
    <TabProductStack.Navigator>
      <TabProductStack.Screen
        name="TabProdutoScreen"
        component={Perfil}
        options={{ headerTitle: 'Onde estão os clientes Natura?', headerShown: false }}
      />
    </TabProductStack.Navigator>
  );
}
