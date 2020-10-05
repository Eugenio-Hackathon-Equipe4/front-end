import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, Image, TextInput, View } from 'react-native';

import { RootStackParamList } from '../types';

export default function FormPerfil({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={[styles.title, { marginTop: 60, marginBottom: 20 }]}> Te conhecendo melhor podemos oferecer a melhor experiência. </Text>
        <Image style={{ width: '90%', height: 130 }} source={{ uri: 'https://areademulher.r7.com/wp-content/uploads/2019/09/cores-de-pele-tipos-exemplos-e-cuidados-necessarios-para-cada-cor-15.jpg' }} />

        <Text style={[styles.subtitle]}> Qual o teu tom de pele?</Text>
        <TextInput
          style={{ paddingLeft: 10, width: '100%', height: 60, margin: 8, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Tom de pele"
        />

        <Text style={[styles.subtitle]}> Qual o teu tipo de pele?</Text>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => navigation.replace('Root')} style={[styles.selected, { backgroundColor: '#909090' }]}>
            <Text style={styles.linkText}>Seca</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.replace('Root')} style={[styles.selected, { backgroundColor: '#909090' }]}>
            <Text style={styles.linkText}>Oleosa</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.select}>
            <Text style={styles.linkText}>Mista</Text>
          </TouchableOpacity>
        </View>


        <TouchableOpacity onPress={() => navigation.replace('Client')} style={styles.button}>
          <Text style={styles.linkText}>Finalizar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.replace('Client')} style={styles.facebbokbutton}>
          <Text style={styles.linkCadastro}>Preencher depois</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.replace('Formulario')} style={[styles.facebbokbutton, { backgroundColor: 'transparent', borderWidth: 0 }]}>
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
  },
  buttons: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left'
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
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E1AF3C',
    marginTop: 15,
    borderRadius: 10
  },
  select: {
    width: '32%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d93434',
    marginHorizontal: 2
    // borderRadius: 10
  },
  selected: {
    width: '32%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d4d4d4',
    marginHorizontal: 2
    // borderRadius: 10
  },
  facebbokbutton: {
    width: 320,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#E1AF3C',
    backgroundColor: 'transparent',
    marginTop: 15,
    borderRadius: 10
  },
});
