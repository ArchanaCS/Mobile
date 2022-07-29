import React from 'react';
import img from './images/one.png';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import logo from './images/logo.png'
export default function App() {

     const navigation=useNavigation();
     const handleClick=()=>{
      navigation.navigate('FirstPage')
     }
  return (
    <TouchableOpacity style={[style.Welcome, style.bg]} onPress={handleClick}>
     <Image source={logo} /> 
    </TouchableOpacity>
  );
}
const style=StyleSheet.create({
    Welcome:{
        backgroundColor:"white",
        alignItems: 'center',
        justifyContent: 'center'
    },
    bg:{
        height:'100%'
    }
})
