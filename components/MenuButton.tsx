import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Text, View } from '../components/Themed';
import { RootStackParamList } from '../types';

interface Props {
  title: string;
}

export default function MenuButton({
  title
}: Props) {
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Empreenda')} > */}
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
      {/* </TouchableOpacity> */}
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#fff"
  },
  button: {
    width: 300,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E1AF3C',
    borderRadius: 4,
    paddingHorizontal: 70
  },

});
