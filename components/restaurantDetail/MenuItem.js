import { View, Text, Image, ScrollView, Button } from "react-native";
import React, { useState } from 'react'
import { foodsMenu } from "../../constants/foodsMenu";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function MenuItem() {
    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 4

    const firstItemIndex = currentPage * itemsPerPage
    const lastItemIndex = firstItemIndex + itemsPerPage

    const currentItems = foodsMenu.slice(firstItemIndex, lastItemIndex)
    
      return (
        <View>
          {currentItems.map((food, index) => (
            <View className='bg-white m-3 rounded-lg shadow-sm' key={index}>
              <View className='flex-row justify-between m-4'>
                <BouncyCheckbox />

                {/* menu info */}
                <View className='flex w-3/5 justify-evenly'>
                  <Text className='text-lg font-bold'>{food.title}</Text>
                  <Text>{food.description}</Text>
                  <Text>{food.price}</Text>
                </View>

                {/* menu image */}
                <View>
                  <Image source={{ uri: food.image }} className='h-24 w-24 rounded-lg'/>
                </View>

              </View> 
            </View>
          ))}

          {/* pagination */}
          <View className="flex-row items-center justify-center bg-white px-4 py-3">
            <Button title="Previous" onPress={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0} color="#fb923c" />
            <Button title="Next" onPress={() => setCurrentPage(currentPage + 1)} disabled={lastItemIndex >= foodsMenu.length} color="#fb923c" />
          </View>
        </View>
      );
    }
    

