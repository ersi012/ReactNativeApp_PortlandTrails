import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './pages/App'; // Import HomeScreen from the separate file
import MonumentSquare from './pages/MonumentSquare'; // Import your screen component

const Stack = createStackNavigator();

const YourComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="MonumentSquare"
          component={MonumentSquare}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default YourComponent;
