import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import nearby from '../../../assets/images/nearby.png'
import shoppingBasket from '../../../assets/images/shopping-basket.png'

export default function header({city, navigation}) {

  return (
    <View className="flex-row justify-between">

      {/* city display */}
      <View className='flex-row ml-3'>
        <Image source={nearby} className='tintColor-primary h-6 w-6 mt-1'/>
        <View className="bg-primary mx-2 py-2 px-3 rounded-lg">
          <Text className='text-white font-semibold text-15'>{city}</Text>
        </View>
      </View>

      {/* shpping basket */}
      <TouchableOpacity 
        testID="shopping-basket"
        className='mr-3'
        onPress={() => navigation.navigate('Orders')}
      >
        <Image 
          source={shoppingBasket} 
          className='tintColor-primary h-6 w-6 mt-1' 
        />
      </TouchableOpacity>
    </View>
  )
}
