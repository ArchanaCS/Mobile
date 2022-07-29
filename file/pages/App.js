


import React from 'react';
import img from './images/one.png';
// import Swiper from 'react-native-swiper';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from './style.js'
export default function App() {
     const navigation=useNavigation();
    
const handleLogin=()=>{
   navigation.navigate("Login")
}
const handleSignUp=()=>{
    navigation.navigate("Signup")

}
  return (
    <View >
      
    </View>
  );
}
