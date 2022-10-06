import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";


import { FONTS, COLORS, SIZES } from '../constants';

export default function CategoryCard({ containerStyle, recipes, onPress = () => { }, navigation }) {


  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.gray2,
        ...containerStyle,
      }}
      onPress={onPress}>
      {/* Imagens */}
      <Image
        source={{ uri: recipes.url }}
        resizeMode="cover"
        style={{
          width: 100,
          height: 100,
          borderRadius: SIZES.radius,
        }}
      />

      {/* Details */}
      <View
        style={{
          width: '65%',
          paddingHorizontal: 20,
        }}>
        {/*Names */}
        <Text
          style={{
            flex: 1,
            ...FONTS.h2,
          }}
        >
          {recipes.title}
        </Text>
        {/* Servings */}
        <Text
          style={{
            color: 'gray',
            ...FONTS.body4
          }}
        >
          {recipes.duration} | {recipes.serving} Porções
        </Text>

      </View>
    </TouchableOpacity>
  )
};

