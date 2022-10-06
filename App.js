import React from 'react';
import { Initial, Recipe, Login, Cadaster, Exit } from './screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './navigation/tabs';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Initial'}>
        <Stack.Screen name="Initial" component={Initial} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadaster" component={Cadaster} />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Recipe" component={Recipe} />
        <Stack.Screen name="Config" component={Exit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
