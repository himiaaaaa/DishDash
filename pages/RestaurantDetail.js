import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/restaurantDetail/About'

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
    </View>
  )
}