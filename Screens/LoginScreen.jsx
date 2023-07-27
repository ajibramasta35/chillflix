import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  KeyboardAwareScrollView,
  ScrollView,
  FlatList,
  SectionList,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Carousel from 'react-native-snap-carousel';

datagambarcarousel = [
  {
    gambar: require('../assets/Banner/sz.jpg'),
  },
  {
    gambar: require('../assets/Banner/joker1.jpg'),
  },
  {
    gambar: require('../assets/Banner/got3.jpg'),
  },
  {
    gambar: require('../assets/Banner/lous.jpg'),
  },
];

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function LoginScreen() {
  // navigation statement
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  // Navigate to About
  const handlelogin = () => {
    if (!username || !password) {
      // Jika input username atau password kosong, tampilkan pesan kesalahan
      alert('Username dan password harus diisi');
    } else {
    //   console.log('Username:', username);
    //   console.log('Password:', password);
      navigation.navigate('Homestack'), { username, password };
    }
  };

  //   tombol lihat password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //   Carousel
  RenderCarouselItem = ({ item, index }) => {
    return (
      <View style={styles.slide} key={index}>
        <Image source={item.gambar} style={{ height:540, resizeMode:'cover',  width:windowWidth*1.6 }}/>
      </View>
    );
  };


  return (
    <>
      <View style={styles.container}>
        <View style={styles.container1}>

          <Carousel
            ref={(c) => {
              this._carousel = c;
            }}
            data={datagambarcarousel}
            renderItem={RenderCarouselItem}
            sliderWidth={windowWidth}
            itemWidth={windowWidth}
            autoplay={true}
            loop={true}
            autoplayDelay={0}
            enableMomentum={true}
            lockScrollWhileSnapping={false}
            autoplayInterval={7000}

          />
          <Image
            source={require('../assets/Icons/chillflixlogo.png')}
            style={styles.logo}
          />

          <LinearGradient
            style={styles.gradientOverlay}
            colors={[
              'rgba(0,0,0,0.8)',
              'rgba(0,0,0,0.6)',
              'rgba(0,0,0,0.6)',
              'rgba(0,0,0,0.8)',
              'rgba(0,0,0,0.8)',
              'red',
            ]}
          />
        </View>

        <View style={styles.container2}>
          <View style={styles.cardlogin}>
            <Text style={styles.tittlelogin}>Login dan nikmati</Text>
            <Text style={styles.tittlelogin1}>
              nonton dimana aja dan kapan aja..
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={setUsername}
              value={username}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={!showPassword}
              onChangeText={setPassword}
              value={password}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Text style={{ marginBottom: 10, textAlign: 'right' }}>
                {showPassword ? 'Sembunyikan Password' : 'Lihat Password'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonlogin} onPress={handlelogin}>
              <Text style={styles.logintext}>Login</Text>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={{ marginRight: 5, fontSize: 12 }}>
                  Belum punya akun?
                </Text>
                <TouchableOpacity>
                  <Text style={{ color: 'red', fontSize: 12 }}>Daftar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  container1: {
    flex: 1,
    width: windowWidth,
    alignItems: 'center',
    backgroundColor: '#171820',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  container2: {
    flex: 0.5,
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    width: 200,
    resizeMode: 'contain',
    top: 160,
    zIndex: 20,
  },
  cardlogin: {
    flex: 0.8,
    width: '90%',
    backgroundColor: '#fafafa',
    borderRadius: 25,
    marginTop: -270,
    paddingTop: 20,
    paddingHorizontal: 25,
    top: 0,
    elevation: 5,
  },
  buttonlogin: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#171820',
    borderRadius: 10,
    height: 50,
    marginTop: 15,
  },
  tittlelogin: {
    fontSize: 24,
    fontWeight: 700,
    color: '#1f1f1f',
  },
  tittlelogin1: {
    fontSize: 24,
    fontWeight: 700,
    color: '#1f1f1f',
    paddingBottom: 40,
  },
  input: {
    height: 60,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  logintext: {
    fontSize: 18,
    fontWeight: 600,
    color: 'red',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default LoginScreen;
