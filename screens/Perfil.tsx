import * as React from 'react';
import { StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import Card from '../components/Product';
import Header from '../components/Header';

export default function Perfil() {
  const [selected, setSelected] = React.useState(false)
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
            <Text style={selected2 ? styles.title : styles.selecttitle}>Pra Você</Text>
          </TouchableOpacity>

        </View>

        {selected && (
          <>
            <Card title={"LUNA MINIATURAS"} subtitle="Floral: fragrância floral, sensual, flor-de-mel." image="https://static.natura.com/cdn/farfuture/pJlXPQEB8heB8SdwWXa7YjO6g1Ytd_houXTo4hoQWLM/1601570295/sites/default/files/styles/medium/public/products/86723_1_2.jpg?itok=A42N3Mpd" />
            <Card title={"MEU PRIMEIRO HUMOR"} subtitle="Sinta essa fragrância icônica e inconfundível." image="https://static.natura.com/cdn/farfuture/0Vonufe5PWVjrK1UprsjolKa8JREsC7wqwjIwavZAmQ/1601481632/sites/default/files/styles/medium/public/products/76458_2_2.jpg?itok=DECS1MqW" />
            <Card title={"TODODIA ALGODÃO"} subtitle="Ideal para quem adora cuidar da pele" image="https://static.natura.com/cdn/farfuture/cRx0C9AMuuTdu8wLkp85PKtYdijeLICyDnERoJgplUU/1601495633/sites/default/files/styles/medium/public/products/100121_1_8.jpg?itok=B-3dxTE7" />
            <Card title={"LUNA MINIATURAS"} subtitle="Floral: fragrância floral, sensual, flor-de-mel." image="https://static.natura.com/cdn/farfuture/0Vonufe5PWVjrK1UprsjolKa8JREsC7wqwjIwavZAmQ/1601481632/sites/default/files/styles/medium/public/products/76458_2_2.jpg?itok=DECS1MqW" />
            <Card title={"LUNA MINIATURAS"} subtitle="Uma breve Descrição do produto." image="https://upload.wikimedia.org/wikipedia/pt/c/cb/Natura_Logo.png" />
          </>)}
        {selected2 &&
          (
            <>
              <Card title={"LUNA MINIATURAS"} subtitle="Floral: fragrância floral, sensual, flor-de-mel." image="https://static.natura.com/cdn/farfuture/pJlXPQEB8heB8SdwWXa7YjO6g1Ytd_houXTo4hoQWLM/1601570295/sites/default/files/styles/medium/public/products/86723_1_2.jpg?itok=A42N3Mpd" />
              <Card title={"MEU PRIMEIRO HUMOR"} subtitle="Sinta essa fragrância icônica e inconfundível." image="https://static.natura.com/cdn/farfuture/0Vonufe5PWVjrK1UprsjolKa8JREsC7wqwjIwavZAmQ/1601481632/sites/default/files/styles/medium/public/products/76458_2_2.jpg?itok=DECS1MqW" />
              <Card title={"LUNA MINIATURAS"} subtitle="Uma breve Descrição do produto." image="https://upload.wikimedia.org/wikipedia/pt/c/cb/Natura_Logo.png" />
            </>
          )}
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
    textDecorationColor: "#ddd",
    textDecorationLine: "underline",
  },
  selecttitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#CAC7C7"
  },
});
