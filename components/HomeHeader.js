import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

export default function header() {
  const [activeTab, setActiveTab] = useState('delivery')

  return (
    <View className="flex-row self-center">
      <HeaderButton 
        text="delivery" 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton 
        text="pickup" 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
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