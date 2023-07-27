import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View, Image, Animated } from 'react-native';
import './ignoreWarnings';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen.jsx';
import AboutScreen from './Screens/AboutScreen.jsx';
import SearchScreen from './Screens/SearchScreen.jsx';
import WelcomeScreen from './Screens/WelcomeScreen.jsx';
import MoviedetailScreen from './Screens/MoviedetailScreen.jsx';
import LoginScreen from './Screens/LoginScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{
                headerShown: false,
                cardStyle: {
                  backgroundColor: 'white',
                },
              }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false,
                cardStyle: {
                  backgroundColor: 'white',
                },
              }}
            />
            <Stack.Screen
              name="Homestack"
              component={HomeStack}
              options={{
                headerShown: false,
                cardStyle: {
                  backgroundColor: 'transparent',
                },
              }}
            />
            <Stack.Screen
              name="About"
              component={AboutScreen}
              options={{
                cardStyle: {
                  backgroundColor: 'red',
                },
              }}
            />
            <Stack.Screen
              name="Search"
              component={SearchScreen}
              options={{
                cardStyle: {
                  backgroundColor: 'red',
                },
              }}
            />
            <Stack.Screen
              name="MovieDetail"
              component={MoviedetailScreen}
              options={{
                headerShown: true,
                headerTransparent: true,
                headerTintColor: 'white',
                headerTitleStyle: {
                  display: 'none',
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

const HomeStack = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: styles.tabBarStyle,
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: '#fafafa',
    }}
    sceneContainerStyle={{ backgroundColor: '#171820' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? require('./assets/Icons/menured.png')
                : require('./assets/Icons/menu.png')
            }
          />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        headerShown: false,
        tabBarLabel:'Explore',
        tabBarIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? require('./assets/Icons/tviconred.png')
                : require('./assets/Icons/tvicon.png')
            }
          />
        ),
      }}
    />
    <Tab.Screen
      name="About"
      component={AboutScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? require('./assets/Icons/abouticonred.png')
                : require('./assets/Icons/abouticon.png')
            }
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171820',
  },
  tabBarStyle: {
    backgroundColor: '#171820',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    elevation: 0,
    borderTopWidth: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 60,
    paddingBottom: 5,
  },
});
