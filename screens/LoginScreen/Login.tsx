import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './Styles'
import { useNavigation } from '@react-navigation/native'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function signIn() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Logged in Success: ", userCredential);
        console.log("Logged in Success: ", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  }
  return (
    <View style={styles.container}>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Email ID"
          placeholderTextColor="white"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Password."
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={() => signIn()}>
        <Text style={styles.textColor}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerBtn} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.textColor}>Register</Text>
      </TouchableOpacity>

    </View>
  )
}