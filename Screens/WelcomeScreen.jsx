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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


function WelcomeScreen() {
      // navigation statement
  const navigation = useNavigation();
  // Navigate to About
  const handlehome = () => {
    navigation.navigate('Homestack');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Ini Halaman Welcome</Text>
      <TouchableOpacity style={{ marginTop:20, paddingVertical:20, paddingHorizontal:50, backgroundColor:'red', alignItems:'center', justifyContent:'center' }} onPress={handlehome}>
        <Text style={{ color:'white' }}>Masuk</Text>
      </TouchableOpacity>
    </View>
  );
}

export default WelcomeScreen;
