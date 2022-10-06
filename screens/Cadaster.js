import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import SPACING from '../config/SPACING';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { COLORS } from '../constants';

//Firebase database
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword} from '@firebase/auth';



const Cadaster = ({ navigation }) => {

  const [Email, setEmail] = useState()
  const [Senha, setSenha] = useState()

  const auth = getAuth()

  function NewUser() {

    createUserWithEmailAndPassword(auth, Email, Senha)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(userCredential)
        navigation.navigate('Initial')
      })

      .catch((error) => {
        alert(error)
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  //console.log(Email)
  //console.log(Senha)

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightGreen1 }}>
      <View style={{ flex: 1, backgroundColor: COLORS.black, opacity: 0.2 }} />
      <View
        style={{
          position: 'absolute',
          height: '100%',
          zIndex: 2,
          width: '100%',
          justifyContent: 'flex-end',
          paddingHorizontal: SPACING * 2,
          paddingBottom: SPACING * 5,
        }}>
        <View
          style={{
            marginBottom: '50%',
            height:"60%",
          }}>
          <Icon
            name="account-circle"
            size={80}
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '20%'
            }}
          />
          <Text 
            style={{
              color: "white",
              fontSize: 20,
              textAlign: 'center',
              paddingTop: 10,
              paddingBottom: 10,
              fontWeight: 'bold',
          }}>
            Faça seu cadastro 
          </Text>
          <TextInput
            onChangeText={(value) => { setEmail(value) }}
            placeholder="E-mail"
            placeholderTextColor="white"
            style={styles.bt}></TextInput>
          <TextInput
            onChangeText={(value) => { setSenha(value) }}
            placeholder="Senha"
            placeholderTextColor="white"
            style={styles.bt}></TextInput>
          <TouchableOpacity
            style={{
              padding: SPACING * 2,
              backgroundColor: COLORS.white,
              borderRadius: SPACING * 2,
              alignItems: 'center',
              marginTop: SPACING * 3,
            }}
            onPress={() => {
              NewUser()
            }}>
            <Text
              style={{
                color: COLORS.black,
                fontSize: SPACING * 2,
                fontWeight: '700',
              }}>
              Criar conta 
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bt: {
    height: 60,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'white',
    marginBottom: 20,
    backgroundColor: 'transparent',
    padding: 20
  },
});

export default Cadaster;
