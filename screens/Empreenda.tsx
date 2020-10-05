import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Text, View } from '../components/Themed';
import Card from '../components/Card';
import Header from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo4 from '../assets/images/img1.jpg';
import logo1 from '../assets/images/img2.jpg';
import logo2 from '../assets/images/img3.jpg';
import logo3 from '../assets/images/img4.jpg';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

export default function Empreenda({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <SafeAreaView style={styles.container}>

        <Header title="" />

        <Text style={styles.title}>
          Profissionalize seu negócio
        </Text>

        <View style={styles.linha}>
          <Card title={"Como administrar meu negócio?"} image={logo4} />
          <Card title={"Como administrar meu financeiro?"} image={logo1} />
        </View>

        <View style={styles.linha}>
          <Card title={"Cliente feliz é compra realizada!"} image={logo2} />
          <Card title={"Como ter uma rede colaborativa?"} image={logo3} />
        </View>

        <TouchableOpacity onPress={() => navigation.replace('Root')} style={[styles.backbutton]}>
          <Text style={[{ color: '#E1AF3C' }]}>Voltar</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    // padding: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  linha: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    // marginLeft: 20,
    textAlign: 'left',
    marginVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
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
    marginBottom: 20
  },
});
