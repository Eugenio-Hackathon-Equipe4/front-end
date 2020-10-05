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
        <Image style={{ margin: 1, width: 120, height: 78, backgroundColor: '#fff' }} source={{ uri: image }} />
        <View style={[styles.viewContent]}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.subtext}>{subtitle} </Text>
        </View>
      </TouchableOpacity>

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
    marginTop: 10,
    width: 320,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E1AF3C',
    marginBottom: 12,
  },
});
