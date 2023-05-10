import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <ImageBackground source={require('../assets/space.gif')}
        resizeMode='cover' style={styles.backgroundImage}>
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>App Estelar</Text>
        </View>

        <TouchableOpacity style={styles.routeCard}>
          <Text style={styles.routeText}>Imagens diárias</Text>
          <Text style={styles.knowMore}>{" Saiba Mais ---> "}</Text>
          <Image source={require('../assets/main-icon.png')} style={styles.iconImage}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.routeCard}>
          <Text style={styles.routeText}>Nave espacial</Text>
          <Text style={styles.knowMore}>{" Saiba Mais ---> "}</Text>
          <Image source={require('../assets/space_crafts.png')} style={styles.iconImage}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.routeCard}>
          <Text style={styles.routeText}>Mapa das estrelas</Text>
          <Text style={styles.knowMore}>{" Saiba Mais ---> "}</Text>
          <Image source={require('../assets/star_map.png')} style={styles.iconImage}/>
        </TouchableOpacity>
        
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // caso a platform Os reconheça Iphone terá uma configuração, caso android erá outra.
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  routeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 75,
    textAlign: 'center'
  },
  knowMore: {
    paddingLeft: 100,
    color: 'red',
    fontSize: 15,
    marginTop: 20
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center'
  },
  iconImage: {
    position: 'absolute',
    height: 100,
    width: 100,
    resizeMode: 'contain',
    top: -30,
    alignSelf: 'center'
  }
});
