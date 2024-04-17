import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from'react-redux'

export default function ViewCart({ navigation, restaurantName }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const { items } = useSelector((state) => state.cart.selectedItems);

  console.log('resname in viewcart', restaurantName)
  console.log('items in viewcart', items)

  useEffect(() => {
    const restaurantItems = items.filter(item => item.restaurantName === restaurantName);

    const getSum = (total, item) => {
      const price = parseFloat(item.price.replace('€', ''));
      return total + price;
    };

    const newTotalPrice = restaurantItems.reduce(getSum, 0).toFixed(2);
    setTotalPrice(newTotalPrice);
  }, [restaurantName, items]);
  
  return (
    <View
        className="flex flex-row justify-center w-full absolute bottom-10 z-50"
    >
      <TouchableOpacity
        className="bg-primary flex flex-row justify-between px-10 py-2 rounded-3xl w-2/3 relative shadow-sm"
      >
        <Text className="text-white text-xl">€{totalPrice}</Text>
        <Text className="text-white text-xl">
          View Cart
        </Text>
      </TouchableOpacity>
    </View>
  )
}
