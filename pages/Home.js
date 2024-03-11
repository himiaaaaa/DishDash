import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HomeHeader from '../components/HomeHeader.js'
import SearchBar from '../components/SearchBar.js'

export default function Home() {
  return (
    <SafeAreaView className="bg-gray-100 flex-1">
        <View className="bg-white p-4">
           <HomeHeader />
           <SearchBar />
        </View>
    </SafeAreaView>
  )
}