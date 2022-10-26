import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useAuthentication } from '../hooks/useAuthentication';
import Styles from './LoginScreen/Styles';
import PostCards from '../components/PostCard/PostCards';

export default function Home() {
  const auth = getAuth();
  const user = useAuthentication();

  async function logout() {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <View>
      <Text style={{ position: 'relative', left: 0, top: 0, width: '100%', height: 50, backgroundColor: 'white', borderRadius: 15, fontSize: 15, fontWeight: 'bold', color: '#333', padding: 15 }}>Welcome {user?.user?.email}</Text>

      <PostCards />

      <View style={{ position: 'absolute', top: 5, right: 5, backgroundColor: 'orange', borderRadius: 15 }}>
        <Button title='Logout' color={'white'} onPress={() => logout()} />
      </View>
    </View>
  )
}