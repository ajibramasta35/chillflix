import { useNavigation, useRoute } from '@react-navigation/native'
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
} from 'react-native';




function MoviedetailScreen() {
    const route = useRoute();
    
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ width:200, height:300, }} source={{ uri: route.params.item.primaryImage.url }} />
      <Text>ID Film: {route.params.item.id}</Text>
      <Text>Title Text: {route.params.item.titleText.text}</Text>
      <Text>Title Type: {route.params.item.titleType.text}</Text>
      <Text>Release Year: {route.params.item.releaseYear.year}</Text>
    </View>
  );
}

export default MoviedetailScreen;
