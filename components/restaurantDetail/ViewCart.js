import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function ViewCart() {
  return (
    <View
        className="flex flex-row justify-center w-full absolute bottom-10 z-50"
    >
      <TouchableOpacity
        className="bg-primary flex flex-row justify-end px-10 py-2 rounded-3xl w-2/3 relative shadow-sm"
      >
        <Text className="text-white text-xl">
          View Cart
        </Text>
      </TouchableOpacity>
    </View>
  )
}
