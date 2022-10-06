import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import SPACING from "../config/SPACING";

import { COLORS } from '../constants';

const Exit = ({ navigation }) => {
  return (
      <View 
        style={{
          position: 'absolute',
          height: '100%',
          zIndex: 2,
          width: '100%',
          justifyContent: 'flex-end',
          paddingHorizontal: SPACING * 2,
          paddingBottom: SPACING * 5,
          backgroundColor: COLORS.lightGreen1
        }}>
          <TouchableOpacity
            style={{
              padding: SPACING * 2,
              backgroundColor: COLORS.white,
              borderRadius: SPACING * 2,
              alignItems: 'center',
              marginTop: SPACING * 3,
            }}
            onPress={() => navigation.navigate('Initial')}>
            <Text
              style={{
                color: COLORS.black,
                fontSize: SPACING * 2,
                fontWeight: '700',
              }}>
              Sair
            </Text>
          </TouchableOpacity>
      </View>
  
  );
};

export default Exit;