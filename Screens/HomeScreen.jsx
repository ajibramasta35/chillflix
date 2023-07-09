import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

// const data = [
//   {
//     imageUrl: require('../assets/Banner/av1.jpg'),
//     title: 'Avengers Infinity War',
//     rating: '3.8',
//   },
//   {
//     imageUrl: require('../assets/Banner/joker1.jpg'),
//     title: 'Joker 2019',
//     rating: '4.8',
//   },
//   {
//     imageUrl: require('../assets/Banner/banner2m.jpg'),
//     title: 'Captain Marvel',
//     rating: '4',
//   },
//   {
//     imageUrl: require('../assets/Banner/fastx.jpg'),
//     title: 'FAST X',
//     rating: '4.2',
//   },
// ];

const windowWidth = Dimensions.get('window').width;
const windowHeightcar = Dimensions.get('window').height / 1.3;

function HomeScreen() {
  // navigation statement
  const navigation = useNavigation();
  // Navigate to About
  const handleAbout = () => {
    navigation.navigate('About');
  };
  // Navigate to Search Page
  const handleSearch = () => {
    navigation.navigate('Search');
  };

  // scroll on refresh
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Panggil fungsi untuk mengambil data dari API dan atur ulang state
    fetchFeaturedMovieData();
    fetchTopWeekendData();
    fetchTvSeriesData();
    setRefreshing(false);
  };

  // API MOvies
  const [featuredMovieData, setFeaturedMovieData] = useState([]);
  const [topWeekendData, setTopWeekendData] = useState([]);
  const [TvSeriesOptions, setTvSeriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedMovieData();
    fetchTopWeekendData();
    fetchTvSeriesData();
  }, []);

  const fetchFeaturedMovieData = async () => {
    const featuredMovieOptions = {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles/random',
      params: {
        limit: '5',
        startYear: '2000',
        list: 'top_rated_250',
      },
      headers: {
        'X-RapidAPI-Key': 'edad74d662msh063b941126df1a5p1b3c52jsn0ba45527db17',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(featuredMovieOptions);
      setFeaturedMovieData(response.data.results);
      setIsLoading(false);
      // console.log(response.data.results);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const fetchTopWeekendData = async () => {
    const topWeekendOptions = {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles/random',
      params: {
        startYear: '2020',
        list: 'top_boxoffice_last_weekend_10',
      },
      headers: {
        'X-RapidAPI-Key': 'edad74d662msh063b941126df1a5p1b3c52jsn0ba45527db17',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(topWeekendOptions);
      setTopWeekendData(response.data.results);
      setIsLoading(false);
      // console.log(response.data.results);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const fetchTvSeriesData = async () => {
    const TvSeriesOptions = {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles',
      params: {
        startYear: '2010',
        list: 'top_rated_series_250',
      },
      headers: {
        'X-RapidAPI-Key': 'edad74d662msh063b941126df1a5p1b3c52jsn0ba45527db17',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(TvSeriesOptions);
      setTvSeriesData(response.data.results);
      setIsLoading(false);
      // console.log(response.data.results);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const FeaturedMovieCar = ({ item }) => {
    return (
      <>
        <TouchableOpacity style={styles.inncersection1}>
          <Image
            style={{
              width: '100%',
              height: windowHeightcar,
              resizeMode: 'cover',
            }}
            //   source={{ uri: item.imageUrl }}
            source={{ uri: item.primaryImage.url }}
          />
          <LinearGradient
            style={styles.gradientOverlay}
            colors={['rgba(0,0,0,0.8)', 'transparent', 'rgba(23, 24, 32, 0.7)', 'rgba(23, 24, 32, 1)']}
          />
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              position: 'absolute',
              bottom: 0,
              width: '100%',
              paddingBottom: 56,
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 32,
                textAlign: 'center',
                fontWeight: 'bold',
                paddingBottom:5,
              }}
            >
              {item.titleText.text}
            </Text>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  paddingHorizontal: 10,
                  textAlign: 'center',
                }}
              >
                {item.titleType.text}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  paddingHorizontal: 10,
                  textAlign: 'center',
                }}
              >
                {item.releaseYear.year}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  const Topthisweekendcar = ({ item }) => {
    return (
      <>
        <TouchableOpacity style={styles.inncersection2}>
          <Image
            style={{
              width: '100%',
              height: 200,
              borderRadius: 6,
              resizeMode: 'cover',
            }}
            //   source={{ uri: item.imageUrl }}
            source={{ uri: item.primaryImage.url }}
          />
          <View style={{ maxWidth: '100%' }}>
            <Text style={styles.judulCard2}>{item.titleText.text}</Text>
            <Text style={styles.subjudulCard}>{item.releaseYear.year}</Text>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  const TvSeriesCar = ({ item }) => {
    return (
      <>
        <TouchableOpacity style={styles.inncersection2}>
          <Image
            style={{
              width: '100%',
              height: 200,
              borderRadius: 6,
              resizeMode: 'cover',
            }}
            //   source={{ uri: item.imageUrl }}
            source={{ uri: item.primaryImage.url }}
          />
          <View style={{ maxWidth: '100%' }}>
            <Text style={styles.judulCard2}>{item.titleText.text}</Text>
            <Text style={styles.subjudulCard}>{item.releaseYear.year}</Text>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollcontainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.Topnav}>
          <Image
            style={styles.iconlogo}
            source={require('../assets/Icons/nlogo.png')}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 25,
            }}
          >
            <TouchableOpacity>
              <Text style={styles.navtext}>Tv Series</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.navtext} onPress={handleAbout}>
                About
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.navtext}>For You</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.iconbutton} onPress={handleSearch}>
            <Image source={require('../assets/Icons/search.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.section1}>
          {isLoading ? (
            <View
              style={{
                flex: 1,
                height: 500,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ActivityIndicator size="large" color="#FAFAFA" />
            </View>
          ) : (
            <FlatList
              data={featuredMovieData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <FeaturedMovieCar item={item} />}
              keyExtractor={(item, index) => index.toString()}
              snapToAlignment="center"
              decelerationRate="fast"
              pagingEnabled
            />
          )}
        </View>
        <View style={styles.containersection}>
          <Text style={styles.judul}>Top This Weekend</Text>
          <TouchableOpacity>
            <Text style={styles.subjudulCard}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section1}>
          {isLoading ? (
            <View
              style={{
                flex: 1,
                height: 200,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ActivityIndicator size="large" color="#FAFAFA" />
            </View>
          ) : (
            <FlatList
              data={topWeekendData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                paddingBottom: 20,
                paddingLeft: 10,
                paddingTop: 10,
              }}
              renderItem={({ item }) => <Topthisweekendcar item={item} />}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </View>
        <View style={styles.containersection}>
          <Text style={styles.judul}>Tv Series</Text>
          <TouchableOpacity>
            <Text style={styles.subjudulCard}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section1}>
          {isLoading ? (
            <View
              style={{
                flex: 1,
                height: 200,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ActivityIndicator size="large" color="#FAFAFA" />
            </View>
          ) : (
            <FlatList
              data={TvSeriesOptions}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                paddingBottom: 20,
                paddingLeft: 10,
                paddingTop: 10,
              }}
              renderItem={({ item }) => <TvSeriesCar item={item} />}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171820',
  },
  Topnav: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 50,
    paddingBottom: 20,
    maxHeight: 120,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 99,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
  },
  navtext: {
    color: 'white',
    fontSize: 14,
  },
  scrollcontainer: {
    flex: 1,
    marginBottom: 60,
  },
  section1: {
    flex: 1,
  },
  inncersection1: {
    width: windowWidth,
    margin: 0,
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  inncersection2: {
    width: 135,
    margin: 0,
    paddingLeft: 8,
  },
  iconlogo: {
    height: 50,
    width: 50,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  iconbutton: {
    height: 40,
    width: 40,
    padding: 5,
    borderWidth: 0.5,
    borderColor: '#D0D0D0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  containersection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  ratinglabel: {
    paddingLeft: 10,
    fontSize: 14,
    color: '#AFAFAF',
  },
  judul: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  judulCard: {
    marginBottom: '-2%',
    paddingTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  judulCard2: {
    marginBottom: '-5%',
    paddingTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  judulCard3: {
    marginBottom: '-5%',
    paddingTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  subjudulCard: {
    paddingTop: 8,
    fontSize: 14,
    color: '#AFAFAF',
  },
  subjudulCard2: {
    paddingTop: 8,
    fontSize: 12,
    color: '#AFAFAF',
  },
  subjudulCard3: {
    paddingTop: 8,
    fontSize: 10,
    color: '#AFAFAF',
  },
});

export default HomeScreen;
