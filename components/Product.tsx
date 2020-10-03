import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Text } from '../components/Themed';

interface Props {
  title: string;
}

export default function Product({ title }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image style={{ margin: 1, width: 120, height: 78, backgroundColor: '#fff' }} source={{ uri: "https://static.natura.com/cdn/farfuture/pJlXPQEB8heB8SdwWXa7YjO6g1Ytd_houXTo4hoQWLM/1601570295/sites/default/files/styles/medium/public/products/86723_1_2.jpg?itok=A42N3Mpd" }} />
        <View style={[styles.viewContent]}>
          <Text style={styles.text}>MEU PRIMEIRO HUMOR</Text>
          <Text style={styles.subtext}>Sinta essa fragrância icônica e inconfundível, </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image style={{ margin: 1, width: 120, height: 78, backgroundColor: '#fff' }} source={{ uri: "https://static.natura.com/cdn/farfuture/cRx0C9AMuuTdu8wLkp85PKtYdijeLICyDnERoJgplUU/1601495633/sites/default/files/styles/medium/public/products/100121_1_8.jpg?itok=B-3dxTE7" }} />
        <View style={[styles.viewContent]}>
          <Text style={styles.text}> TODODIA ALGODÃO</Text>
          <Text style={styles.subtext}>Ideal para quem adora cuidar da pele  </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image style={{ margin: 1, width: 120, height: 78, backgroundColor: '#fff' }} source={{ uri: "https://static.natura.com/cdn/farfuture/0Vonufe5PWVjrK1UprsjolKa8JREsC7wqwjIwavZAmQ/1601481632/sites/default/files/styles/medium/public/products/76458_2_2.jpg?itok=DECS1MqW" }} />
        <View style={[styles.viewContent]}>
          <Text style={styles.text}>LUNA MINIATURAS</Text>
          <Text style={styles.subtext}>Floral: fragrância floral, sensual, flor-de-mel. </Text>
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.button}>
        <Image style={{ margin: 1, width: 120, height: 78, backgroundColor: '#fff' }} source={{ uri: "https://upload.wikimedia.org/wikipedia/pt/c/cb/Natura_Logo.png" }} />
        <View style={[styles.viewContent]}>
          <Text style={styles.text}>Nome do Produto</Text>
          <Text style={styles.subtext}>Uma breve description. Uma breve description. Uma breve description. </Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-evenly",
  },
  viewContent: {
    //flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    color: "#fff"
  },
  subtext: {
    fontSize: 14,
    textAlign: 'left',
    color: "#fff",
    width: '60%'
  },
  button: {
    width: 320,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ff7c34',
    marginBottom: 12,
  },

});
