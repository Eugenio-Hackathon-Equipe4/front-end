import * as React from 'react';
import { StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import Card from '../components/Product';
import Header from '../components/Header';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

export default function Perfil({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  const [selected, setSelected] = React.useState(true)
  const [selected2, setSelected2] = React.useState(false)

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <Header title="" />

        <View style={styles.tab}>
          <TouchableOpacity onPress={() => { setSelected(true); setSelected2(false) }}>
            <Text style={selected ? styles.title : styles.selecttitle}>Produtos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setSelected(false); setSelected2(true) }}>
            <Text style={selected2 ? styles.title : styles.selecttitle}>Para Você</Text>
          </TouchableOpacity>

        </View>

        {selected && (
          <>
            <Card title={"Luna Miniaturas"} subtitle="Floral: fragrância floral, sensual, flor-de-mel." image="https://static.natura.com/cdn/farfuture/pJlXPQEB8heB8SdwWXa7YjO6g1Ytd_houXTo4hoQWLM/1601570295/sites/default/files/styles/medium/public/products/86723_1_2.jpg?itok=A42N3Mpd" />
            <Card title={"Meu Primeiro Humor"} subtitle="Sinta essa fragrância icônica e inconfundível." image="https://static.natura.com/cdn/farfuture/0Vonufe5PWVjrK1UprsjolKa8JREsC7wqwjIwavZAmQ/1601481632/sites/default/files/styles/medium/public/products/76458_2_2.jpg?itok=DECS1MqW" />
            <Card title={"Tododia Algodão"} subtitle="Ideal para quem adora cuidar da pele" image="https://static.natura.com/cdn/farfuture/cRx0C9AMuuTdu8wLkp85PKtYdijeLICyDnERoJgplUU/1601495633/sites/default/files/styles/medium/public/products/100121_1_8.jpg?itok=B-3dxTE7" />
            <Card title={"Deo Corporal"} subtitle="FNão há nada melhor que a sensação de bem-estar" image="https://static.natura.com/cdn/farfuture/EIUlAiFfYmQPly2EDeSKYcjEwPG91rr_BpvZxRBj6wE/1601479482/sites/default/files/styles/medium/public/products/96737_2_2.jpg?itok=MZiKTbi4" />
            {/* <Card title={"LUNA MINIATURAS"} subtitle="Uma breve Descrição do produto." image="https://upload.wikimedia.org/wikipedia/pt/c/cb/Natura_Logo.png" /> */}
          </>)}
        {selected2 &&
          (
            <>
              <Card
                title={"Essencial Oud Feminino"}
                subtitle="Floral: fragrância floral, sensual, flor-de-mel."
                image="https://static.natura.com/sites/default/files/styles/medium/public/products/76425_2_2.jpg?itok=ymKNemg6" />
              <Card
                title={"Frescor Maracujá"}
                subtitle="Com extrato aromático de maracujá, vindo da polpa"
                image="https://static.natura.com/cdn/farfuture/7pMWVcTeZ6zoIeYJKsMB5qcPS30MH9Q2luQY9GBSks8/1601647194/sites/default/files/styles/medium/public/products/58418_2.jpg?itok=9-3-Ivug" />
              <Card
                title={"Sabonete Puro Vegetal "}
                subtitle="Uma breve Descrição do produto."
                image="https://static.natura.com/cdn/farfuture/ZcJODuKD1yPedqrPBy3OoG0huw6eZ2KOGlfG22ieePo/1601899749/sites/default/files/styles/product_detail_square/public/products/26384_3.jpg?itok=ZOt9O53O" />
            </>
          )}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
          alignItems: 'center',
          backgroundColor: "#fff"
        }}
        >
          <TouchableOpacity onPress={() => navigation.replace('Client')} style={styles.button} >
            <HomeIcon name="ios-home" color={"#E1AF3C"} />
            <Text style={styles.text}>Início</Text>
          </TouchableOpacity >

          <TouchableOpacity onPress={() => navigation.replace('Sacola')} style={[styles.button, { marginLeft: 20 }]} >
            <TabBarIcon name="shopping-bag" color={"#E1AF3C"} />
            <Text style={styles.text}>Sacola</Text>
          </TouchableOpacity >
        </View>
      </View>

    </ScrollView>
  );
}
function TabBarIcon(props: { name: string; color: string }) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
function HomeIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tab: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 45,
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationColor: "#E1AF3C",
    textDecorationLine: "underline",
  },
  selecttitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#CAC7C7"
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#E1AF3C"
  },
  button: {
    width: 130,
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',

    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#E1AF3C',
    // paddingVertical: 40,
    marginVertical: 10,
  }
});
