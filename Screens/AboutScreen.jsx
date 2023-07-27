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

function AboutScreen() {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ color:'white' }}> Ini Halaman About</Text>
    </View>
  );
}

export default AboutScreen;
