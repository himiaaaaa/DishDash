import { View, Text } from 'react-native'
import React from 'react'

export default function About({ route, navigation }) {
  const { name } = route.params.restaurant;
  return (
    <View className='mt-30'>
      <Text className='color-red'>{name}</Text>
    </View>
  )
}