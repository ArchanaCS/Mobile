import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'; 
import toplogo from './images/toplogo.png';
import SecondScreenpic from './images/SecondScreenpic.png';
// import { Button } from 'react-native'
import {View, Image, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
export default function FirstPage() {
  const navigation=useNavigation();
  const handlepress1=()=>{
    navigation.navigate('ThirdPage')
   }
  
  return (
    <>
      <View style={[style.Welcome, style.bg]}>
        <TouchableOpacity style={[style.circle]} onPress={handlepress1}>
          <Image source={toplogo} />
        </TouchableOpacity >
        <View>
          <Image style={[style.peep]} source={SecondScreenpic} />
        </View>
        <View>
            <Text style={[style.fonttop]}>Best Solution </Text>
            <Text style={[style.fontbot]}>For Your Needs</Text>
        </View>
        <View >
            <Text style={[style.font1]} >"Now it is very easy to find your home services.</Text>
            <Text style={[style.font1]} >We have a lot of workers very experienced."</Text>
        </View>
        <View style={[style.navi]}>
        <View style={[style.threecircle]}></View>
        <View style={[style.threecircle1, style.marginleft]}></View>
        <View style={[style.threecircle]}></View>
        </View > 
            <TouchableOpacity style={[style.button]}>
              <Text style={[style.white]}>Get Started</Text>
            </TouchableOpacity>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  white:{
    color:'white'
  },
  marginleft:{
    marginLeft:10,
    marginRight:10,
  },
  Welcome: {
    backgroundColor: 'white',
  },
  bg: {
    height: '100%',
  },
 
  circle: {
    borderColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 90,
    padding: 15,
    alignSelf: 'flex-start',
    // shadowColor: '#000',
    // shadowOpacity: 0.78,
    // shadowRadius:4.5,
    top:4,
    left:4
  },
  peep: {
    backgroundColor: 'white',
    // alignItems: 'center',
    justifyContent: 'center',
    left: 60,
   
  },
  fonttop:
  {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color:'black',
    top:5,
    
  },
  fontbot:{
    fontSize: 25,
    fontWeight: 'bold',
    color:'black',
    top:5,
    textAlign: 'center',
    // left:100
  },
  font1:
  {
    fontSize: 15,
    fontWeight: 'normal',
    color:'black',
    top:10,
    textAlign: 'center',
    Fontfamily: 'Ubuntu',
    
  },
  threecircle1:{
    borderColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 90,
    padding: 10,
    alignSelf: 'flex-start',
    top:20,
    backgroundColor:'#84A5C3',
    borderWidth:0
      },
  threecircle:{
    borderColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 90,
    padding: 10,
    alignSelf: 'flex-start',
    top:20,
    backgroundColor:'#F3F3F3',
    borderWidth:0
  },
 navi:{
    flexDirection:'row',
    justifyContent:'center'
},

button:{
    
     left:40,
     borderRadius: 10,
     padding:10,
     top:30,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#056C95',
     width:300

}
});
