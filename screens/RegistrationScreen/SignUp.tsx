import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, {useState} from 'react'
import styles from './Styles'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'

export default function SignUp() {
  const navigation = useNavigation();
  const auth = getAuth();

  const [valueForSignUp, setValueForSignUp] = useState({
    email: '',
    password: '',
    error: ''
  })

  async function signUp() {
    if (valueForSignUp.email === '' || valueForSignUp.password === '') {
      setValueForSignUp({
        ...valueForSignUp,
        error: 'Email and password are mandatory.'
      })
      return;
    }

    try {
      const response = await createUserWithEmailAndPassword(auth, valueForSignUp.email, valueForSignUp.password);
      Alert.alert('Account Created Successfully', 'Also you are logged in automatically', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'OK'},
      ]);
    } catch (error) {
      setValueForSignUp({
        ...valueForSignUp,
        error: error.message,
      })
    }
  }
  return (
    <View style={styles.container}>
      <Text>Register Your Email ID</Text>

      {!!valueForSignUp.error && <View style={styles.error}><Text>{valueForSignUp.error}</Text></View>}

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Email ID"
          placeholderTextColor="white"
          value={valueForSignUp.email}
          onChangeText={(text) => setValueForSignUp({ ...valueForSignUp, email: text })}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Password."
          placeholderTextColor="white"
          secureTextEntry={true}
          value={valueForSignUp.password}
          onChangeText={(text) => setValueForSignUp({ ...valueForSignUp, password: text })}
        />
      </View>

      <TouchableOpacity style={styles.registerBtn} onPress={() => signUp()}>
        <Text style={styles.textColor}>Create Account</Text>
      </TouchableOpacity>

    </View>
  )
}


