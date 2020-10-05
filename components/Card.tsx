import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Text, View } from '../components/Themed';
import logo from '../assets/images/logo.png';

interface Props {
  title: string;
  image: string;
}

export default function Card({ title, image }: Props) {
  return (
    <View style={styles.container}>
      <View style={{ borderWidth: 1, borderColor: "#E1AF3C" }}>
        <Image style={{ width: 128, height: 128 }} source={image} />
      </View>

      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    color: "#fff"
  },
  button: {
    width: 130,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E1AF3C',
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 8
  },

});
