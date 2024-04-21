import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { items } from '../../constants/items'

export default function Category({ setCategory }) {
    const [selectedCategory, setSelectedCategory] = useState(null)

    const selectCategory = (category) => {
        setSelectedCategory(category);
        setCategory(category); 
      }

    return(
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pt-2 px-3">
                {items.map((item, index) => (
                    <TouchableOpacity
                        className={`flex ml-2 p-3 pb-8 ${selectedCategory === item.text ? "bg-primary" : "bg-white"} rounded-full align-center justify-center items-center shadow-sm`}
                        onPress={()=>selectCategory(item.text)}
                        key={index}
                    >
                        <View  className={`flex items-center justify-center rounded-full w-12 h-12 ${selectedCategory === item.text ? "bg-white" : "bg-gray"}`} >
                            <Image 
                                source={item.image}
                                resizeMode="contain"
                                className="w-7 h-7"
                            />
                        </View>
                        <Text className={`text-${selectedCategory === item.text ? "white" : "black"} mt-2 font-semibold`}>
                            {item.text}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}
