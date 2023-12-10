import React from 'react';

import Login from './src/screens/Login';
import Signup from './src/screens/Signup';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Note from './src/screens/Note';


const Stack = createStackNavigator();



function App() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name='Note' component={Note} />
    </Stack.Navigator>
  );
}


export default () => {
  return (
    <NavigationContainer>
     
        <App />
      
    </NavigationContainer>
  )
}
