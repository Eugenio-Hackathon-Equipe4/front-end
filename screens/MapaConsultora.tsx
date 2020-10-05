import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

import { Text, View } from '../components/Themed';
import { RootStackParamList } from '../types';
import Header from '../components/Header';

export default function MapaConsultora({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <Header title="Janaina" />

        <Text style={[styles.title, { marginTop: 30 }]}>Estas são as Consultoras e Lojas perto de você</Text>
        {/* <Text style={styles.subtitle}>Toque no circulo para selecionar</Text> */}

        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: -20.3423389,
            longitude: -40.288469,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            key={1}
            coordinate={{
              latitude: -20.3423389,
              longitude: -40.288469,
            }}
            title={"Revendedora Manu"}
            description={"Cometicos e Variedades!"}
          />
          <Marker
            key={2}
            coordinate={{
              latitude: -20.3222,
              longitude: -40.3381,
            }}
            title={"Revendedora Cátia"}
            description={"Bem estar pra você!"}
          />
        </MapView>

        <TouchableOpacity onPress={() => navigation.navigate('Pagamento')} style={styles.button}>
          <Text style={styles.text}>PROCEDER PARA PAGAMENTO</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.replace('Sacola')} style={[styles.backbutton]}>
          <Text style={[styles.text, { color: '#E1AF3C' }]}>Voltar</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'space-between',
    padding: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#494949"
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "#666"
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#fff"
  },
  button: {
    width: 280,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E1AF3C',
    margin: 10,
    borderRadius: 10,
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
  },
  mapStyle: {
    width: Dimensions.get('window').width - 45,
    height: Dimensions.get('window').height - 360,
  },
});
