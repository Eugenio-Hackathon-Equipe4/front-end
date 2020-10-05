import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Text } from '../components/Themed';

interface Props {
  title: string;
  subtitle: string;
  image: string
}

export default function Product({ title, subtitle, image }: Props) {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.button}>
        <View style={{ borderWidth: 1 }}>
          <Image style={{ margin: 1, width: 120, height: 78, backgroundColor: '#fff', left: -2 }} source={{ uri: image }} />
        </View>
        <View style={[styles.viewContent]}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.subtext}>{subtitle} </Text>
        </View>

      </TouchableOpacity>
      <View style={[styles.add]}>
        <Text style={styles.textadd}> + </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-evenly",
    // marginLeft: 20
  },
  viewContent: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    color: "#444"
  },
  subtext: {
    fontSize: 14,
    textAlign: 'left',
    color: "#444",
    width: '60%'
  },
  button: {
    position: 'relative',
    marginTop: 10,
    width: 300,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginBottom: 12,
    borderWidth: 1,
  },
  add: {
    backgroundColor: '#E1AF3C',
    width: 30,
    height: 30,
    borderRadius: 15,
    position: "absolute",
    bottom: 0,
    left: -15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textadd: {
    color: '#fff',
    fontSize: 24
  }
});
