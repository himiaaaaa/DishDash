import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { handleAddToCart, handleRemoveFromCart } from "../../../services/cartService";

export default function MenuItem({ restaurantName, foodsMenu, navigation, user }) {
    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 4
    const { isAuthenticated } = user
    const { email } = user.user

    const dispatch = useDispatch()

    const firstItemIndex = currentPage * itemsPerPage
    const lastItemIndex = firstItemIndex + itemsPerPage

    const currentItems = foodsMenu.slice(firstItemIndex, lastItemIndex)

    const selectedItems = useSelector(state => state.cart.selectedItems.items);

    const itemCount = (food) => {
      return selectedItems.filter(item => item.title === food.title && item.restaurantName === restaurantName).length;
    };
  
      return (
        <View>
          {currentItems.map((food, index) => (
            <View className='bg-white mb-3 mx-2 rounded-lg shadow-sm' key={index}>
              <View className='flex-row justify-between mx-3 my-4'>
                
                {/* Add and Remove icons with item count */}
                <View className='flex-row items-center'>
                  <TouchableOpacity
                    title="-"
                    onPress={() => handleRemoveFromCart(dispatch, food, restaurantName, email, isAuthenticated, navigation)}
                    disabled={itemCount(food) === 0}
                    className='bg-primary w-5 h-5 flex items-center justify-center rounded-full mr-1'
                  >
                    <Text className='text-white'>-</Text>
                  </TouchableOpacity>
                  <Text>{itemCount(food)}</Text>
                  <TouchableOpacity
                    title="+"
                    onPress={() => handleAddToCart(dispatch, food, restaurantName, email, isAuthenticated, navigation)}
                    className='bg-primary w-5 h-5 flex items-center justify-center rounded-full ml-1 mr-3'
                  >
                    <Text className='text-white'>+</Text>
                  </TouchableOpacity>
                </View>

                {/* menu info */}
                <View className='flex w-3/5 justify-evenly'>
                  <Text className='text-lg font-bold'>{food.title}</Text>
                  <Text >{food.description}</Text>
                  <Text className='mt-2 font-semibold'>{food.price}</Text>
                </View>

                {/* menu image */}
                <View>
                  <Image source={{ uri: food.image }} className='h-24 w-24 rounded-lg'/>
                </View>

              </View> 
            </View>
          ))}

          {/* pagination */}
          <View className="flex-row items-center justify-center mt-11">
            <Button title="Previous" onPress={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0} color="#fb923c" />
            <Button title="Next" onPress={() => setCurrentPage(currentPage + 1)} disabled={lastItemIndex >= foodsMenu.length} color="#fb923c" />
          </View>
        </View>
      );
    }
    

