import * as React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

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
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>

      <SafeAreaView style={styles.container}>
        <Header title="Olá Márcia" />
        {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')} >
          <Card title={"Perfil"} />
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')} >
          <Card title={"Estoque"} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Root')} >
          <Card title={"Agendamentos"} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Root')} >
          <Card title={"Meus Pedidos"} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MeuMapa')} >
          <Card title={"Clientes"} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Empreenda')} >
          <Card title={"Empreenda"} />
        </TouchableOpacity>

      </SafeAreaView>
    </ScrollView>

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
    width: 300,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E1AF3C',
    borderRadius: 4,
    //paddingHorizontal: 70,
    paddingVertical: 40,
    marginVertical: 10,
  },
});
