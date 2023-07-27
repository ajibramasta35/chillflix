import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  FlatList,
  SectionList,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function WelcomeScreen() {
  // navigation statement
  const navigation = useNavigation();
  // Navigate to About
  const handlehome = () => {
    navigation.navigate('Login');
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            style={styles.bgimage}
            source={require('../assets/Banner/unnamed.png')}
          />
          <LinearGradient
            style={styles.gradientOverlay}
            colors={[
              'rgba(0,0,0,0.8)',
              'transparent',
              'rgba(23, 24, 32, 0.8)',
              'rgba(23, 24, 32, 1)',
            ]}
          />
          <View style={styles.containerbutton}>
            <Text style={styles.judul}>
              Nikmati kemudahan nonton Film atau Series dimana saja dengan Chillflix
            </Text>
            <TouchableOpacity style={styles.buttonmasuk} onPress={handlehome}>
              <Text style={{ color: 'white', fontSize: 16 }}>Mulai Nonton</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerbutton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
  },
  buttonmasuk: {
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 80,
    borderRadius: 15,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  judul: {
    color: 'white',
    paddingHorizontal: 25,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  bgimage: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    resizeMode: 'cover',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default WelcomeScreen;
