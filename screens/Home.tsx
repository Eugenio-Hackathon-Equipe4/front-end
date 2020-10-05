import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import Card from '../components/MenuButton';
import Header from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

export default function Home({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Olá Márcia" />
      {/* <Text style={styles.title}>Olá Janaina!</Text> */}
      <Card title={"Perfil"} />
      <Card title={"Estoque"} />
      <Card title={"Agendamentos"} />
      <Card title={"Meus Pedidos"} />
      <Card title={"Clientes"} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Empreenda')} >
        <Card title={"Empreenda"} />
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    width: 250,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E1AF3C',
    borderRadius: 4,
  },
});
