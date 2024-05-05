import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/restaurantDetail/About/About'
import MenuItem from '../components/restaurantDetail/MenuItem/MenuItem'
import ViewCart from '../components/restaurantDetail/ViewCart/ViewCart'
import { foodsMenu } from '../constants/foodsMenu'
import { useSelector } from 'react-redux'

export default function RestaurantDetail({ route, navigation }) {
  //console.log('route params', route.params)
  const user = useSelector(state => state.profile)
  const { name } = route.params.restaurant;

  return (
    <View>
      <About route={route} />
      <MenuItem restaurantName={name} foodsMenu={foodsMenu} navigation={navigation} user={user} />
      <ViewCart navigation={navigation} restaurantName={name} user={user} />
    </View>
  )
}