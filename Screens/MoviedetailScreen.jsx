import { useNavigation, useRoute } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  SectionList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function MoviedetailScreen() {
  const route = useRoute();

  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.section1}>
          <View style={styles.section1}>
            <Image
              style={{
                width: windowWidth,
                height: windowHeight / 1.3,
                resizeMode: 'cover',
              }}
              source={{ uri: route.params.item.primaryImage.url }}
            />
            <LinearGradient
              style={styles.gradientOverlay}
              colors={[
                'rgba(0,0,0,0.8)',
                'transparent',
                'transparent',
                'rgba(23, 24, 32, 0.8)',
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
                paddingHorizontal: 15,
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
                {route.params.item.titleText.text}
              </Text>
              <Text style={styles.plot}>
                {route.params.item.plot.plotText.plainText}
              </Text>

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  maxWidth: '100%',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    fontSize: 14,
                    paddingHorizontal: 10,
                    textAlign: 'center',
                  }}
                ></Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(23, 24, 32, 1)',
              paddingHorizontal: 20,
              paddingBottom:15,
              justifyContent: 'space-between',
              minHeight:210,
            }}
          >
            <View style={styles.rowketcontainer}>
              <View style={styles.subrowketcontainer}>
                <Text style={styles.headingdesc}>Genre:</Text>
                <Text style={styles.desc}>
                  {route.params.item.titleText.text}
                </Text>
              </View>
              <View style={styles.subrowketcontainer}>
                <Text style={styles.headingdesc}>Type:</Text>
                <Text style={styles.desc}>
                  {route.params.item.titleType.text}
                </Text>
              </View>
            </View>

            <View style={styles.rowketcontainer}>
              <View style={styles.subrowketcontainer}>
                <Text style={styles.headingdesc}>Genre</Text>
                <Text style={styles.desc}>
                  {route.params.item.genres.genres.map((genre, index) => (
                    <Text
                      key={index}
                      style={{
                        color: 'white',
                        paddingHorizontal: 10,
                        textAlign: 'center',
                      }}
                    >
                      {genre.text},
                    </Text>
                  ))}
                </Text>
              </View>
              <View style={styles.subrowketcontainer}>
                <Text style={styles.headingdesc}>Rating</Text>
                <Text style={styles.desc}>
                  {route.params.item.ratingsSummary.aggregateRating}/10
                </Text>
              </View>
            </View>

            <View style={styles.rowketcontainer}>
              <View style={styles.subrowketcontainer}>
                <Text style={styles.headingdesc}>Year</Text>
                <Text style={styles.desc}>
                  {route.params.item.releaseYear.year}
                </Text>
              </View>
              <View style={styles.subrowketcontainer}>
                <Text style={styles.headingdesc}>Position</Text>
                <Text style={styles.desc}>
                  {route.params.item.position}
                </Text>
              </View>
            </View>
            <View style={styles.rowketcontainer}>
              <View style={styles.subrowketcontainer}>
                <Text style={styles.headingdesc}>Language</Text>
                <Text style={styles.desc}>
                  {route.params.item.plot.language.id}
                </Text>
              </View>
              <View style={styles.subrowketcontainer}>

              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  section1: {
    flex: 1,
  },
  rowketcontainer: {
    flex: 1,
    width: windowWidth,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  subrowketcontainer: {
    flex: 1,
    maxWidth: '100%',
    paddingRight: 30,
  },
  heading: {
    fontSize: 28,
    fontWeight: 700,
    color: 'white',
  },
  plot: {
    fontSize: 14,
    color: 'white',
    marginBottom: 10,
    textAlign:'center',
  },
  headingdesc: {
    color: '#454545',
  },
  desc: {
    color: 'white',
    fontSize: 14,
  },
});

export default MoviedetailScreen;
