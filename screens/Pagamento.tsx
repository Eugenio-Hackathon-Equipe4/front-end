import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { RootStackParamList } from '../types';
import { Text, View } from '../components/Themed';
import Header from '../components/Header';

export default function Pagamento({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>

      <View style={styles.container}>
        <Header title="Márcia" />

        <Text style={styles.title}>Qual será a forma de Pagamento? </Text>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
          alignItems: 'center',
          marginBottom: 30
        }}
        >
          <Text style={[styles.title, { marginRight: 20 }]}>Total</Text>
          <Text style={styles.title}> R$ 87,90 </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.replace('Client')} style={styles.button}>
          <Text style={styles.text}>PAGAR PESSOALMENTE</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.replace('Client')} style={styles.button}>
          <Text style={styles.text}>PAGAR ONLINE</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.replace('Root')} style={[styles.backbutton]}>
          <Text style={[styles.text, { color: '#E1AF3C' }]}>Voltar</Text>
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: "#494949"
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#fff"
  },
  button: {
    width: 280,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E1AF3C',
    margin: 10,
    borderRadius: 10,
  },
  backbutton: {
    width: 280,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#E1AF3C',
    borderRadius: 10,
  },
  mapStyle: {
    width: Dimensions.get('window').width - 45,
    height: Dimensions.get('window').height - 390,
  },
});
