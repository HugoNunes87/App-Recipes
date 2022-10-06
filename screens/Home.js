import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Image,
} from "react-native";

//Firebase database
import database from "../firebase/firebaseconfig";
import { collection, getDocs } from 'firebase/firestore/lite';

import Icon from 'react-native-vector-icons/MaterialIcons';
import iconSalad from '../assets/images/recipes/recipe.png';

import { FONTS, COLORS, SIZES } from '../constants';

//Cards
import TrandingCard from "../components/TrandingCard";
import CategoryCard from "../components/CategoryCard";


export default function Task({ navigation, containerStyle }) {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getRecipes(database) {
      let lista = []
      const recipesCol = collection(database, 'Recipes');
      try {
        const recipeSnapshot = await getDocs(recipesCol);
        recipeSnapshot.docs.forEach((doc) => {
          lista.push({ ...doc.data(), id: doc.id })
        })
        setRecipes(lista);
        return lista;
      } catch (err) {
        return [];
      }
    }
    getRecipes(database);
    //console.log(recipes)
  }, []);

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          alignItems: 'center',
          height: 80,
        }}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor="transparent"
          translucent
        />
        {/*Text */}
        <View
          style={{
            flex: 1,
          }}>
          <Text
            style={{
              color: COLORS.darkGreen,
              ...FONTS.h2,
            }}>
            Bem-Vindo
          </Text>

          <Text
            style={{
              marginTop: 3,
              color: COLORS.gray,
              ...FONTS.body3,
            }}>
            Encontre aqui Suas receitas favoritas
          </Text>
        </View>

        {/*Image Usuario */}
        <TouchableOpacity >
          <Icon
            name="face"
            size={60}
            style={{
              width: 60,
              height: 60,
              borderRadius: 50,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderSeeRecipeCard() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding,
          borderRadius: 10,
          backgroundColor: COLORS.lightGreen,
        }}>
        {/*Imagem */}
        <View
          style={{
            width: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={iconSalad}
            style={{
              width: 80,
              height: 80,
            }}
          />
        </View>

        {/*Texto */}
        <View
          style={{
            flex: 1,
            paddingVertical: SIZES.radius,
          }}>
          <Text
            style={{
              width: '70%',
              ...FONTS.body4,
            }}>
            Escolha sua receita!
          </Text>

          <TouchableOpacity
            style={{
              marginTop: 10,
            }}
            onPress={() => console.log('receitas')}>
            <Text
              style={{
                color: COLORS.darkGreen,
                textDecorationLine: 'underline',
                ...FONTS.h4,
              }}>
              Receitas
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderCategoryHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          marginHorizontal: SIZES.padding,
        }}>
        {/*Section Title */}

        <Text
          style={{
            flex: 1,
            ...FONTS.h2,
          }}>
          Receitas
        </Text>

        {/*View All */}
        <TouchableOpacity>
          <Text
            style={{
              color: COLORS.gray,
              ...FONTS.body4,
            }}>
            ver tudo
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderTreeddingSecction() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}>
        <Text
          style={{
            marginHorizontal: SIZES.padding,
            ...FONTS.h2,
          }}>
          Receitas em alta
        </Text>

        <FlatList
          data={recipes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <TrandingCard
                containerStyle={{
                  marginLeft: index == 0 ? SIZES.padding : 0,
                }}
                recipes={item}
                onPress={() => {
                  navigation.navigate("Recipe", {
                    id: item.id,
                    description: item.description,
                    title: item.title,
                    ingredients: item.ingredients,
                    url: item.url,
                    serving: item.serving,
                    duration: item.duration
                  })
                }}
              />
            );
          }}
        />
      </View>

    )

  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={recipes}
        keyboardDismissMode="on-drag"
        ListHeaderComponent={
          <View>
            {/* Header */}
            {renderHeader()}
            {/* See Recipe Card */}
            {renderSeeRecipeCard()}
            {/* Treedding Section  */}
            {renderTreeddingSecction()}
            {/* Category Header */}
            {renderCategoryHeader()}
          </View>
        }
        renderItem={({ item }) => {
          return (
            <CategoryCard
              containerStyle={{
                marginHorizontal: SIZES.padding,
              }}
              recipes={item}
              onPress={() => {
                navigation.navigate("Recipe", {
                  id: item.id,
                  description: item.description,
                  title: item.title,
                  ingredients: item.ingredients,
                  url: item.url,
                  serving: item.serving,
                  duration: item.duration
                })
              }}
            />
          );
        }}
        ListFooterComponent={
          <View
            style={{
              marginBottom: 100,
            }}
          />
        }
      />
    </SafeAreaView>
  )

};

