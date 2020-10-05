import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, TextInput, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Text, View } from '../components/Themed';
import { RootStackParamList } from '../types';
import Header from '../components/Header';


export default function Mensagem({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>

      <View style={styles.container}>
        <Header title="Márcia" />

        <Text style={[styles.text, { color: '#666', fontSize: 22, textAlign: 'left', marginLeft: 16, marginTop: 40 }]}>
          Alcance mais clientes
      </Text>
        <Text style={{ fontSize: 14, width: '85%', color: '#777' }}>
          Esta mensagem irá para todos os clientes no raio de 2km
      </Text>
        <TextInput
          style={{
            padding: 20,
            width: 320,
            height: 230,
            margin: 8,
            marginBottom: 30,
            backgroundColor: '#fff',
            borderColor: '#333',
            borderWidth: 1,
            color: "#CAC7C7",
            fontSize: 14,
          }}
          numberOfLines={5}
          multiline
          defaultValue={"Ex.: Promoção da Semana!Compre 1 creme hidratante e ganhe 1 sabonete!!"}
        />
        <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.button}>
          <Text style={styles.text}>Enviar mensagem</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.cancelbutton}>
          <Text style={[styles.text, { color: '#E1AF3C' }]}>Cancelar</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#fff",
    width: "90%",
    textAlign: 'center'
  },
  button: {
    width: 280,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E1AF3C',
    marginBottom: 12,
    borderRadius: 10
  },
  cancelbutton: {
    width: 280,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#E1AF3C',
    marginBottom: 12,
    borderRadius: 10
  },
});
