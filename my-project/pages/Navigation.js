import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppHome from './App';
import SplashScreen from './SplashScreen';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import Sample from './Sample';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="Home"
          component={AppHome}
          options={{ headerShown: false }}
        />   
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ThirdPage"
          component={ThirdPage}
          options={{ headerShown: false }}
        />
         
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
