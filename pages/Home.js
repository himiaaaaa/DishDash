import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HomeHeader from '../components/HomeHeader.js'
import SearchBar from '../components/SearchBar.js'
import Category from '../components/Category.js'
import RestaurantList from '../components/RestaurantList/RestaurantList.js'

export default function Home() {
  return (
    <SafeAreaView className="bg-gray-100 flex-1">
        <View className="bg-white p-4">
           <HomeHeader />
           <SearchBar />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Category />
          <RestaurantList />
        </ScrollView>
    </SafeAreaView>
  )
}