import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Card from '../components/MenuButton';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá Janaina!</Text>
      <Card title={"Perfil"} />
      <Card title={"Estoque"} />
      <Card title={"Agendamentos"} />
      <Card title={"Pedidos"} />
      <Card title={"Clientes"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 65,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
