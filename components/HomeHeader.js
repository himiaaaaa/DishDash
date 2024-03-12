import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function header({city}) {

  return (
    <View className="flex-row justify-between">

      {/* city display */}
      <View className='flex-row ml-3'>
        <Image source={require('../assets/images/nearby.png')} className='color-primary h-6 w-6 mt-1'/>
        <View className="bg-primary mx-2 py-2 px-3 rounded-lg">
          <Text className='text-white font-semibold text-15'>{city}</Text>
        </View>
      </View>

      {/* shpping basket */}
      <TouchableOpacity className='mr-3'>
        <Image source={require('../assets/images/shopping-basket.png')} className='color-primary h-6 w-6 mt-1'/>
      </TouchableOpacity>
    </View>
  )
}

const HeaderButton = (props) => (
    <TouchableOpacity 
      className={`bg-${props.activeTab === props.text ? 'primary' : 'white'} mx-1 py-2 px-5 rounded-full`}
      onPress={() => props.setActiveTab(props.text)}
    >
      <Text 
        className={`text-${props.activeTab === props.text ? 'white' : 'black'} font-semibold text-15`}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
)