import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

import { RootStackParamList } from '../types';
import logo from '../assets/images/logo.png';

export default function LoginScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <View style={styles.container}>
      <Image style={{ width: 128, height: 128 }} source={logo} />

      <TouchableOpacity onPress={() => navigation.replace('Client')} style={styles.button}>
        <Text style={styles.linkText}>Cliente</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.button}>
        <Text style={styles.linkText}>Consultora</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={() => navigation.replace('Loja')} style={styles.button}>
        <Text style={styles.linkText}> Tenho uma Loja</Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={() => navigation.replace('Cadastrar')} style={styles.link}>
        <Text style={styles.linkCadastro}>Quero me cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 18,
    color: '#fff',
  },
  linkCadastro: {
    fontSize: 16,
    color: '#E1AF3C',
    fontWeight: 'bold',
  },
  button: {
    width: 320,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E1AF3C',
    marginTop: 15,
    borderRadius: 10
  },
});
