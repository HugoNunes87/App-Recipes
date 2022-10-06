import React, { useState } from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import SPACING from '../config/SPACING';
const { height } = Dimensions.get('window');
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants';

const Recipe = ({ recipe, navigation, route}) => {
  const [url] = useState(route.params.url);
  const [title] = useState(route.params.title);
  const [ingredients] = useState(route.params.ingredients);
  const [description] = useState(route.params.description);
  const [serving] = useState(route.params.serving);
  const [duration] = useState(route.params.duration);

  return (
    <>
      <ScrollView>
        <View>
          <ImageBackground
            source={{ uri: url }}
            style={{
              height: height / 2.5,
              padding: SPACING * 2,
              paddingTop: SPACING * 4,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                height: SPACING * 4.5,
                width: SPACING * 4.5,
                backgroundColor: COLORS.white,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: SPACING * 2.5,
              }}
              onPress={() => navigation.navigate('Home')}>
              <Ionicons
                name="arrow-back"
                size={SPACING * 2.5}
                color={COLORS.gray}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: SPACING * 4.5,
                width: SPACING * 4.5,
                backgroundColor: COLORS.white,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: SPACING * 2.5,
              }}>
              <Ionicons name="share" size={SPACING * 2.5} color={COLORS.gray} />
            </TouchableOpacity>
          </ImageBackground>
          <View
            style={{
              padding: SPACING * 2,
              paddingTop: SPACING * 3,
              marginTop: -SPACING * 3,
              borderTopLeftRadius: SPACING * 3,
              borderTopRightRadius: SPACING * 3,
              backgroundColor: COLORS.white,
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: SPACING * 3,
                alignItems: 'center',
              }}>
              <View style={{ width: '100%' }}>
                <Text
                  style={{
                    fontSize: SPACING * 3,
                    color: COLORS.black,
                    fontWeight: '700',
                  }}>
                  {title}
                </Text>
              </View>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View
                style={{
                  padding: SPACING,
                  paddingHorizontal: SPACING * 2,
                  backgroundColor: COLORS.lightLime,
                  flexDirection: 'row',
                  borderRadius: SPACING,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Ionicons
                  name="time"
                  color={COLORS.gray}
                  size={SPACING * 1.7}
                />
                <Text
                  style={{
                    fontSize: SPACING * 1.6,
                    fontWeight: '600',
                    marginLeft: SPACING / 2,
                    color: COLORS.gray,
                  }}>
                  {duration}
                </Text>
              </View>
              <View
                style={{
                  padding: SPACING,
                  paddingHorizontal: SPACING * 2,
                  backgroundColor: COLORS.lightLime,
                  flexDirection: 'row',
                  borderRadius: SPACING,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Ionicons
                  name="restaurant"
                  color={COLORS.gray}
                  size={SPACING * 1.7}
                />
                <Text
                  style={{
                    fontSize: SPACING * 1.6,
                    fontWeight: '600',
                    marginLeft: SPACING / 2,
                    color: COLORS.gray,
                  }}>
                  {serving} Porções
                </Text>
              </View>
            </View>
            <View style={{ marginVertical: SPACING * 3 }}>
              <Text
                style={{
                  fontSize: SPACING * 2,
                  fontWeight: '700',
                  color: COLORS.darkGreen,
                }}>
                Ingredientes
              </Text>

              {ingredients.map((ingredients) => (
                <View
                  style={{
                    paddingTop: 5,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  key={ingredients}
                  
                >
                  <View
                    style={{
                      width: SPACING,
                      height: SPACING,
                      backgroundColor: COLORS.light,
                      borderRadius: SPACING,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: SPACING * 1.7,
                      fontWeight: "600",
                      color: COLORS.gray,
                      marginLeft: SPACING,
                    }}
                  >
                {ingredients} 
                  </Text>
                </View>
              ))}

              
            </View>

            <Text
                style={{
                  fontSize: SPACING * 2,
                  fontWeight: '700',
                  color: COLORS.dark,
                  marginBottom: SPACING,
                }}>
                Modo de preparo
              </Text>
            {description.map((description) => (
            <View
              key={description}
            >
              <Text
                style={{
                  paddingTop: 10,
                  fontSize: SPACING * 1.7,
                  fontWeight: '500',
                  color: COLORS.gray,
                }}>
                {description}
              </Text>
            </View>
            ))}

          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Recipe;
