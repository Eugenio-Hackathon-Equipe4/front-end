import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Card from '../components/Product';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá Janaina!</Text>
      <Card title={"Perfil"} />

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
