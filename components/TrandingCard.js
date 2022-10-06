import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { BlurView } from 'expo-blur';

import { FONTS, COLORS, SIZES } from '../constants';

const RecipeCardDetails = ({recipes}) => {
  return (
    <View 
      style={{
        flex: 1
      }}
    >
    {/* Name e Bookmark */}

    <View
      style={{
        flex : 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    
    >
      <Text
        style={{
          width: "70%",
          color: COLORS.white,
          ...FONTS.h3,
          fontSize: 15,
          fontWeight: '700'
        }}
      >
      {recipes.title}
      </Text>
    </View>

    {/* Duration e Seving */}
    <Text
        style={{
          color:COLORS.lightGray,
          ...FONTS.body4
        }}
    >
      {recipes.duration} | {recipes.serving} Porções
    </Text>
    
    </View>
  )
}

const RecipeCardInfo = ({ recipes }) => {
  if (Platform.OS === 'Ios') {
    return (
      <BlurView
        tint="dark"
        style={styles.recipeCardContainer}
      >
        <RecipeCardDetails
          recipes={recipes}
        />
      </BlurView>
    );
  } else {
    return (
      <View
        style={{
          ...styles.recipeCardContainer,
          backgroundColor: COLORS.transparentDarkGray
        }}
      >
        <RecipeCardDetails
          recipes={recipes}
        />

      </View>
    )
  }
};


export default function TrandingCard({ containerStyle, recipes, onPress = () => {} }) {
  return (
    <TouchableOpacity
      style={{
        height: 350,
        width: 250,
        marginRight: 20,
        marginTop: SIZES.radius,
        ...containerStyle,
      }}
      onPress={onPress}>
      {/*Backgound Image */}
      <Image
        source={{uri: recipes.url}}
        resizeMode="cover"
        style={{
          width: 250,
          height: 350,
          borderRadius: SIZES.radius,
        }}
      />

      {/*category */}
      <View
        style={{
          position: 'absolute',
          top: 20,
          left: 15,
          paddingHorizontal: 5,
          backgroundColor: COLORS.transparentGray,
          borderRadius: SIZES.radius,
        }}>
      </View>

      {/*Card Info */}

      <RecipeCardInfo recipes={recipes} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  recipeCardContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    height: 100,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.radius,
  },
});








