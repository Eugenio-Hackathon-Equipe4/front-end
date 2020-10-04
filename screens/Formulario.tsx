import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, Image, TextInput, View } from 'react-native';

import { RootStackParamList } from '../types';

export default function LoginScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={{ width: 128, height: 84 }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/c/cb/Natura_Logo.png' }} />
        <Text style={[styles.title, { marginTop: 30 }]}> Dados Pessoais </Text>

        <TextInput
          style={{ paddingLeft: 10, width: '100%', height: 60, margin: 8, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Nome"
        />
        <TextInput
          style={{ paddingLeft: 10, width: '100%', height: 60, margin: 8, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Sexo"
        />
        <TextInput
          style={{ paddingLeft: 10, width: '100%', height: 60, margin: 8, borderColor: 'gray', borderWidth: 1 }}
          placeholder="CPF"
        />
        <TextInput
          style={{ paddingLeft: 10, width: '100%', height: 60, margin: 8, borderColor: 'gray', borderWidth: 1 }}
          placeholder="CEP"
        />
        <TextInput
          style={{ paddingLeft: 10, width: '100%', height: 60, margin: 8, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Email"
        />
        <TextInput
          style={{ paddingLeft: 10, width: '100%', height: 60, margin: 8, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Senha"
        />

        <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.button}>
          <Text style={styles.linkText}>Continuar como Revendedora</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.replace('Client')} style={styles.button}>
          <Text style={styles.linkText}>Continuar como Cliente</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.replace('Cadastrar')} style={[styles.facebbokbutton, { backgroundColor: 'transparent' }]}>
          <Text style={styles.linkCadastro}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 60
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
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff7c34',
    marginTop: 15,
    borderRadius: 10
  },
  googlebutton: {
    width: 320,
    height: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff7c34',
    marginTop: 15,
    borderRadius: 10
  },
  facebbokbutton: {
    width: 320,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d4d4d4',
    marginTop: 15,
    borderRadius: 10
  },
});
