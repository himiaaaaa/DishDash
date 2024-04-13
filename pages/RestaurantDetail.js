import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/restaurantDetail/About'
import MenuItem from '../components/restaurantDetail/MenuItem'
import ViewCart from '../components/restaurantDetail/ViewCart'

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <MenuItem />
      <ViewCart navigation={navigation} RestaurantName={route.params.name}/>
    </View>
  )
}