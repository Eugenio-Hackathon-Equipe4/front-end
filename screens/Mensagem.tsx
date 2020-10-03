import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Text, View } from '../components/Themed';
import { RootStackParamList } from '../types';


export default function Mensagem({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: '#666', fontSize: 18 }]}>
        Escreva uma mensagem e ganhe mais clientes
      </Text>
      <TextInput
        style={{
          padding: 20,
          width: 320,
          height: 130,
          margin: 8,
          marginBottom: 30,
          backgroundColor: '#eee',
          borderColor: '#d4d4d4',
          borderWidth: 1,
          color: "#444",
          fontSize: 14,
        }}
        numberOfLines={5}
        multiline
        defaultValue={"Promoção da semana Compre 1 creme hidratante e ganhe um sabonete!!"}
      />
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.button}>
        <Text style={styles.text}>Enviar mensagem</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.cancelbutton}>
        <Text style={[styles.text, { color: '#ff7c34' }]}>Cancelar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#fff",
    width: 320,
    textAlign: 'center'
  },
  button: {
    width: 320,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff7c34',
    marginBottom: 12,
    borderRadius: 10
  },
  cancelbutton: {
    width: 320,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ff7c34',
    marginBottom: 12,
    borderRadius: 10
  },
});
