import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

import { RootStackParamList } from '../types';

export default function LoginScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <View style={styles.container}>
      <Image style={{ width: 128, height: 84 }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/c/cb/Natura_Logo.png' }} />
      <Text style={[styles.title, { marginTop: 30 }]}> Me diga quem é você? </Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.button}>
        <Text style={styles.linkText}>Sou Revendedora</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace('Client')} style={styles.button}>
        <Text style={styles.linkText}>Sou Cliente</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace('Loja')} style={styles.button}>
        <Text style={styles.linkText}> Tenho uma Loja</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
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
    color: '#ff7c34',
    fontWeight: 'bold',
  },
  button: {
    width: 320,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff7c34',
    marginTop: 15,
    borderRadius: 10
  },
});
