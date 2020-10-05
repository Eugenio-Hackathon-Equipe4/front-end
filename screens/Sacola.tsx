import * as React from 'react';
import { StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import Card from '../components/Product';
import Header from '../components/Header';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';


export default function Sacola({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <Header title="" />
        <Text style={styles.title}> Minha Sacola</Text>

        <Card title={"LUNA MINIATURAS"} subtitle="Floral: fragrância floral, sensual, flor-de-mel." image="https://static.natura.com/cdn/farfuture/pJlXPQEB8heB8SdwWXa7YjO6g1Ytd_houXTo4hoQWLM/1601570295/sites/default/files/styles/medium/public/products/86723_1_2.jpg?itok=A42N3Mpd" />
        <Card title={"MEU PRIMEIRO HUMOR"} subtitle="Sinta essa fragrância icônica e inconfundível." image="https://static.natura.com/cdn/farfuture/0Vonufe5PWVjrK1UprsjolKa8JREsC7wqwjIwavZAmQ/1601481632/sites/default/files/styles/medium/public/products/76458_2_2.jpg?itok=DECS1MqW" />
        <Card title={"TODODIA ALGODÃO"} subtitle="Ideal para quem adora cuidar da pele" image="https://static.natura.com/cdn/farfuture/cRx0C9AMuuTdu8wLkp85PKtYdijeLICyDnERoJgplUU/1601495633/sites/default/files/styles/medium/public/products/100121_1_8.jpg?itok=B-3dxTE7" />

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

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
          alignItems: 'center',
          backgroundColor: "#fff"
        }}
        >
          <TouchableOpacity onPress={() => navigation.navigate('MeuMapa')} style={styles.button} >
            <Text style={styles.linkText}>Retirar</Text>
          </TouchableOpacity >

          <TouchableOpacity onPress={() => navigation.navigate('Client')} style={styles.button} >
            <Text style={styles.linkText}>Receber em Casa</Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity onPress={() => navigation.replace('Produtos')} style={styles.cancelbutton}>
          <Text style={[styles.linkText, { color: '#E1AF3C' }]}>Escolher mais Produtos</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
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
    fontSize: 22,
    paddingVertical: 20,
    fontWeight: 'bold',
    textDecorationColor: "#ddd",
    // textDecorationLine: "underline",
  },
  linkText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
  },
  selecttitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#CAC7C7"
  },
  button: {
    width: 150,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E1AF3C',
    borderRadius: 10,
    marginHorizontal: 10,
    paddingHorizontal: 7,
    //paddingVertical: 40,
    marginVertical: 10,
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
