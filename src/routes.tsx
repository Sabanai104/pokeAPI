import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Details from './pages/Details';

const Stack = createStackNavigator();

const Routes = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
         <Stack.Screen name='home' component={Home} options={{title: 'Overview'}} />
         <Stack.Screen name='details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;