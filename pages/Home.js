import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HomeHeader from '../components/HomeHeader.js'

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
        <View style={{ backgroundColor: "white", padding: 15 }}>
           <HomeHeader />
        </View>
    </SafeAreaView>
  )
}