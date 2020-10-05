import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Text, View } from '../components/Themed';
import Card from '../components/Card';
import Header from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo4 from '../assets/images/img5.jpg';
import logo1 from '../assets/images/img6.jpg';
import logo2 from '../assets/images/img7.jpg';
import logo3 from '../assets/images/img8.jpg';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

export default function BemEstar({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <SafeAreaView style={styles.container}>

        <Header title="" />

        <Text style={styles.title}>
          Melhore suaQualidade de Vida
        </Text>

        <View style={styles.linha}>
          <Card title={"Faça Yoga em Casa."} image={logo4} />
          <Card title={"Alimente-se Melhor."} image={logo1} />
        </View>

        <View style={styles.linha}>
          <Card title={"Músicas para relaxar"} image={logo2} />
          <Card title={"Dia das Mulheres Bem Estar Bem"} image={logo3} />
        </View>

        <TouchableOpacity onPress={() => navigation.replace('Client')} style={[styles.backbutton]}>
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
