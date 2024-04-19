import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/restaurantDetail/About'
import MenuItem from '../components/restaurantDetail/MenuItem'
import ViewCart from '../components/restaurantDetail/ViewCart'
import { foodsMenu } from '../constants/foodsMenu'

export default function RestaurantDetail({ route, navigation }) {
  //console.log('route params', route.params)
  
  const { name } = route.params.restaurant;
  return (
    <View>
      <About route={route} />
      <MenuItem restaurantName={name} foodsMenu={foodsMenu}/>
      <ViewCart navigation={navigation} restaurantName={name}/>
    </View>
  )
}