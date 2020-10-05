import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { Text } from '../components/Themed';
import logo from '../assets/images/logo.png';

interface Props {
  title: string;
}

export default function Product({ title }: Props) {
  return (
    <View style={styles.container}>
      <Image style={{ width: 85, height: 85, margin: 16 }} source={logo} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: "space-between",
    flexDirection: 'row',
    height: 90,
    backgroundColor: '#fff',
    width: '100%',
    // paddingBottom: 30
  },
  text: {
    fontSize: 22,
    flex: 1,
    fontWeight: 'bold',
    color: "#333",
    // marginLeft: 30,
    marginRight: 90,
    textAlign: 'center',
  },
});
