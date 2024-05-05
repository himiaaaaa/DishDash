import { View, Text, Image } from "react-native";
import React from 'react'

export default function OrderCompletedItem({ foodsMenu }) {
    
      return (
        <View>
          {foodsMenu.map((food, index) => (
            <View className='bg-white mb-3 mx-2 rounded-lg shadow-sm' key={index}>
              <View className='flex-row justify-between mx-3 my-4'>

                {/* menu info */}
                <View className='flex w-3/5 justify-evenly'>
                  <Text className='text-lg font-bold'>{food.title}</Text>
                  <Text >{food.description}</Text>
                  <Text className='mt-2 font-semibold'>{food.price}</Text>
                </View>

                {/* menu image */}
                <View>
                  <Image 
                    testID='food-image'
                    source={{ uri: food.image }} 
                    className='h-24 w-24 rounded-lg'
                  />
                </View>

              </View> 
            </View>
          ))}

        </View>
      );
    }