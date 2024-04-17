import { View, Text, Image, ScrollView, Button, TouchableOpacity } from "react-native";
import React, { useState } from 'react'
import { foodsMenu } from "../../constants/foodsMenu";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart, RemoveFromCart } from "../../redux/reducers/cartSlice";

export default function MenuItem({ restaurantName }) {
    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 4

    const dispatch = useDispatch()

    console.log('resname in menuitem', restaurantName)

    const firstItemIndex = currentPage * itemsPerPage
    const lastItemIndex = firstItemIndex + itemsPerPage

    const currentItems = foodsMenu.slice(firstItemIndex, lastItemIndex)

    const selectedItems = useSelector(state => state.cart.selectedItems.items);

    const itemCount = (food) => {
      return selectedItems.filter(item => item.title === food.title && item.restaurantName === restaurantName).length;
    };

    const handleAddToCart = (food, restaurantName) => {
      dispatch(AddToCart({...food, restaurantName}));
    };
  
    const handleRemoveFromCart = (food, restaurantName) => {
      dispatch(RemoveFromCart({...food, restaurantName}));
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
                    onPress={() => handleRemoveFromCart(food, restaurantName)}
                    disabled={itemCount(food) === 0}
                    className='bg-primary w-5 h-5 flex items-center justify-center rounded-full mr-1'
                  >
                    <Text className='text-white'>-</Text>
                  </TouchableOpacity>
                  <Text>{itemCount(food)}</Text>
                  <TouchableOpacity
                    title="+"
                    onPress={() => handleAddToCart(food, restaurantName)}
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
    

