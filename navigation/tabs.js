import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Home, Exit} from '../screens';

import { COLORS} from '../constants'

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        activeTintColor: COLORS.darkLime,
        
      }}
      screenOptions={{
        title: '',
        headerTransparent: true,
        headerShown: false,
      }}
      >
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home-filled" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen 
        name="Exit" 
        component={Exit}
        options={{
        tabBarIcon: ({ color }) => (
          <Icon name="logout" color={color} size={28} />
        ),
        }} 
      />
      
    </Tab.Navigator>
  );
};

export default Tabs;
