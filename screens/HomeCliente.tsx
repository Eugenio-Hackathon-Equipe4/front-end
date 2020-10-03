import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Card from '../components/MenuButton';

export default function HomeCliente() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá Manuela!</Text>
      <Card title={"Perfil"} />
      <Card title={"Agendamentos"} />
      <Card title={"Meus Pedidos"} />
      <Card title={"Comprar"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
