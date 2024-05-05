import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, Modal, ScrollView, Image } from 'react-native'
import { useSelector } from'react-redux'
import CartItem from '../CartItem/CartItem.js'
import left from '../../../assets/icons/left.png'
import { addOrderToFirebase } from '../../../services/OrdersService.js'

export default function ViewCart({ navigation, restaurantName, user }) {

  const [totalPrice, setTotalPrice] = useState(0);
  const { items } = useSelector((state) => state.cart.selectedItems);
  const [modalVisible, setModalVisible] = useState(false); 
  const email  = user.user.email

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
        onPress={() => setModalVisible(true)}
      >
        <Text className="text-white text-xl">€{totalPrice}</Text>
        <Text className="text-white text-xl">
          View Cart
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        
        <View className='bg-black/30 flex justify-end h-full'>
            <View className='bg-white h-3/4'>
                {/*  cart header */}
                <View className='flex flex-row items-center border-b border-gray'>
                    {/* back button */}
                    <TouchableOpacity onPress={() => setModalVisible(false)} className='absolute left-0'> 
                        <View className='flex flex-row items-center border-primary border rounded-full ml-2 bg-secondary'>
                            <Image source={left} className='h-7 w-7'/>        
                            <Text className='font-bold pr-2'>Back</Text>
                        </View> 
                    </TouchableOpacity>
        
                    {/* title */}
                    <View className='flex flex-col items-center p-2 relative mx-auto'>
                       <Text className='text-2xl font-bold'>{restaurantName}</Text> 
                       <Text className='text-sm font-medium opacity-50'>Your order</Text>
                    </View>
                </View>

                {/* cart items  */}
                <ScrollView className='flex flex-col'>
                {items
                  .filter((item) => item.restaurantName === restaurantName)
                  .map((item, index) => (
                     <CartItem key={index} item={item}/>
                 ))}
                </ScrollView>

                {/*  total sum calculation */}
                <View className='flex flex-col bg-secondary'>
                    {/* title */}
                    <View className='flex flex-col ml-4 mt-4'>
                        <Text className="text-2xl font-bold tracking-tight text-gray-900">Prices in EUR</Text>
                        <Text className="mt-1 text-sm leading-7 text-gray-600 mb-1">incl. taxes (if applicable)</Text>
                    </View>
                    
                    {/* cart value */}
                    <View className='flex flex-row justify-between pt-5 px-5'>
                        <Text className='text-md font-medium'>Subtotal</Text>
                        <Text className="text-lg font-semibold">€{totalPrice}</Text>
                    </View>

                    {/* delivery fee */}
                    <View className="flex flex-row items-center justify-between pt-3 pb-2 px-5">
                      <Text className="text-md font-medium">Delivery Fee</Text>
                      { totalPrice >= 200 ? 
                        <Text className="text-lg font-semibold">€0.00</Text> 
                        : 
                        <Text className="text-lg font-semibold">€5.00</Text>
                      }
                    </View>
                    {totalPrice >= 200 ? <Text className="text-sm px-5 color-primary">Enjoy your free delivery for over €200 cart value.</Text> : ''}

                    {/* total fee*/}
                    <View className="flex flex-row items-center justify-between pt-3 px-5 border-t border-primary">
                      <Text className="text-lg font-medium">Total Fee</Text>
                      <Text className="text-lg font-semibold">{totalPrice ? totalPrice >= 200 ? `€${totalPrice}`: `€${(Number(totalPrice) + 5).toFixed(2)}` : "€0.00"}</Text>
                    </View>

                    {/* checkout button */}
                    <TouchableOpacity 
                        className='bg-primary rounded-full w-1/2 p-3 mx-auto mt-5 mb-7 flex justify-center items-center' 
                        onPress={() => addOrderToFirebase(items, restaurantName, totalPrice, email, navigation, setModalVisible)}
                    >       
                        <Text className='text-lg font-bold color-white'>Checkout</Text>
                    </TouchableOpacity>

                </View>
              </View>
            </View>
      </Modal>
    </View>
  )
}
