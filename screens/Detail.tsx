import { View, Text } from 'react-native'
import React from 'react'
import DetailCards from '../components/DetailCard/DetailCards'
import { useRoute } from '@react-navigation/native'

export default function Detail() {
  const postId = useRoute().params?.postId;
  return (
    <View>
      <DetailCards postId={postId}/>
    </View>
  )
}