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
import { signInWithEmailAndPassword, getAuth } from '@firebase/auth';


const Login = ({ navigation }) => {

  const [VerificaEmail, setVerificaEmail] = useState('')
  const [VerificaSenha, setVerificaSenha] = useState('')

  function VerificationUser() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, VerificaEmail, VerificaSenha)
      .then(navigation.navigate('Home'))
      .catch((err) => { console.log("Usuário não cadastrado." + err) })
  }

  return (
    <View style={{ flex: 1 }} backgroundColor={COLORS.lightGreen1}>
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
            name="person"
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
            Bem-Vindo 
          </Text>
          <TextInput
            onChange={(value) => setVerificaEmail(value)}
            placeholder="E-mail"
            placeholderTextColor="white"
            style={styles.bt}></TextInput>
          <TextInput
            onChange={(value) => setVerificaSenha(value)}
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
            onPress={() => VerificationUser()}>
            <Text
              style={{
                color: COLORS.black,
                fontSize: SPACING * 2,
                fontWeight: '700',
              }}>
              Entrar
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

export default Login;
