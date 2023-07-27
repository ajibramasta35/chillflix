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
  Animated,
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
const windowHeight = Dimensions.get('window').height;

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
  const handleMovieDetail = (item) => {
    navigation.navigate('MovieDetail', { item });
  };
  // scroll on refresh
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Panggil fungsi untuk mengambil data dari API dan atur ulang state
    fetchFeaturedMovieData();
    fetchTopWeekendData();
    fetchTvSeriesData();
    fetchComingMoviesData();
    setRefreshing(false);
  };

  // API MOvies
  const [featuredMovieData, setFeaturedMovieData] = useState([]);
  const [topWeekendOptions, setTopWeekendData] = useState([]);
  const [TvSeriesOptions, setTvSeriesData] = useState([]);
  const [ComingMoviesOptions, setComingMovies] = useState([]);


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedMovieData();
    fetchTopWeekendData();
    fetchTvSeriesData();
    fetchComingMoviesData();
  }, []);

  const fetchFeaturedMovieData = async () => {
    const featuredMovieOptions = {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles/random',
      params: {
        limit: '5',
        info: 'base_info',
        startYear: '2006',
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
        info: 'base_info',
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
        info: 'base_info',
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

  const fetchComingMoviesData = async () => {
    const ComingMoviesOptions = {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles/random',
      params: {
        info: 'base_info',
        list: 'most_pop_movies'
      },
      headers: {
        'X-RapidAPI-Key': 'edad74d662msh063b941126df1a5p1b3c52jsn0ba45527db17',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(ComingMoviesOptions);
      setComingMovies(response.data.results);
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
        <TouchableOpacity
          style={styles.inncersection1}
          onPress={() => handleMovieDetail(item)}
        >
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
            colors={[
              'rgba(0,0,0,0.8)',
              'transparent',
              'rgba(23, 24, 32, 0.7)',
              'rgba(23, 24, 32, 1)',
            ]}
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
                paddingBottom: 5,
              }}
            >
              {item.titleText.text}
            </Text>
            <View style={{ flex: 1, flexDirection: 'row'}}>
              {item.genres.genres.map((genre, index) => (
                <Text
                  key={index}
                  style={{
                    color: 'white',
                    fontSize: 14,
                    padding: 4,
                    textAlign: 'center',
                    alignItems:'center'
                  }}
                >
                  {genre.text}
                </Text>
              ))}
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  const Topthisweekendcar = ({ item }) => {
    return (
      <>
        <TouchableOpacity
          style={styles.inncersection2}
          onPress={() => handleMovieDetail(item)}
        >
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
        <TouchableOpacity
          style={styles.inncersection2}
          onPress={() => handleMovieDetail(item)}
        >
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
  const ComingMoviesCar = ({ item }) => {
    return (
      <>
        <TouchableOpacity
          style={styles.inncersection2}
          onPress={() => handleMovieDetail(item)}
        >
          <Image
            style={{
              width: '100%',
              height: 200,
              borderRadius: 6,
              resizeMode: 'cover',
            }}
            //   source={{ uri: item.imageUrl }}
            source={{ uri: item.primaryImage && item.primaryImage.url ? item.primaryImage.url : 'https://placehold.co/200x400/png' }}
          />
          <View style={{ maxWidth: '100%' }}>
            <Text style={styles.judulCard2}>{item.titleText.text}</Text>
            <Text style={styles.subjudulCard}>{item.releaseYear.year}</Text>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  const scrollY = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false },
  );

  const headerBackgroundColor = scrollY.interpolate({
    inputRange: [0, 100], // Nilai scroll yang digunakan sebagai trigger
    outputRange: ['transparent', '#1f1f1f'], // Background color yang ingin diubah
    extrapolate: 'clamp',
  });

  return (
    <>
      <Animated.View style={[styles.Topnav, { backgroundColor: headerBackgroundColor }]}>
        <Image
          style={styles.iconlogo}
          source={require('../assets/Icons/chillflixlogo.png')}
        />
        <TouchableOpacity style={styles.iconbutton} onPress={handleSearch}>
          <Image source={require('../assets/Icons/search.png')} />
        </TouchableOpacity>
      </Animated.View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollcontainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
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
              data={topWeekendOptions}
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
        <View style={styles.containersection}>
          <Text style={styles.judul}>Up Comings</Text>
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
              data={ComingMoviesOptions}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                paddingBottom: 20,
                paddingLeft: 10,
                paddingTop: 10,
              }}
              renderItem={({ item }) => <ComingMoviesCar item={item} />}
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
    backgroundColor: '#1f1f1f',
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
    height: 100,
    width: 100,
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
