import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image  } from "react-native";
import OrderCompletedItem from "../components/restaurantDetail/OrderCompletedItem/OrderCompletedItem";
import { format } from 'date-fns';
import dot from '../assets/icons/dot.png';
import no_completed from '../assets/images/no-completed.png';
import { fetchCompletedOrders, deleteOrder } from "../services/OrdersService";

export default function Orders({ navigation }) {
    const user = useSelector(state => state.profile)
    const email = user.user.email

    console.log(`Order completed`, email)
    const [orders, setOrders] = useState({
        restaurantName: 'Hello',
        items: [
            {
                title: "Steak Frites",
                description: "Grilled sirloin steak served with crispy French fries",
                price: "€25.99",
                image: "https://i.pinimg.com/564x/84/fc/70/84fc70649716a570b9020fed51727a8b.jpg",
            },
        ],
    });

    useEffect(() => {
        fetchCompletedOrders(email, setOrders, navigation);
    }, [navigation, email]);

    const formatOrderDate = (timestamp) => {
        const date = timestamp ? new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000) : new Date();
        return format(date, "Pp");
    };

    console.log('orders in orders', orders[0])

    return (
    <SafeAreaView>
        <ScrollView className=" bg-white" showsVerticalScrollIndicator={false}>
          <View className="mt-2 flex flex-col items-center justify-center mx-2">
            {orders.length > 0 ? (
                orders.map((order, index) => (
                    <View key={index} className='flex flex-col py-2 px-2 bg-secondary rounded-lg mb-5'>
                       <View className='flex flex-row justify-between items-center mx-2 mb-2'>
                            <Text className='font-extrabold text-xl'>{order.restaurantName}</Text>
                            <View>
                                <View className='flex flex-row justify-center items-center'>
                                    <Image source={dot} className='w-3 h-3 mr-1'/>
                                    <Text className='font-semibold'>Completed order</Text>
                                </View>
                                <Text className='font-thin text-sm'>{formatOrderDate(order.createdAt)}</Text>
                            </View>
                       </View>
                       <OrderCompletedItem
                            foodsMenu={order.items}
                       /> 
                       <View className='flex flex-row justify-between items-center'>
                            <View className='flex flex-row gap-2 pl-2'>
                                <Text className='font-semibold color-primary'>Sum:</Text>
                                <Text className='font-normal color-primary'>€{order.pricePlusDelivery}</Text>
                            </View>
                                <TouchableOpacity className="mt-2" onPress={() => deleteOrder(order.userEmail, order.createdAt)}>
                                    <Text className="font-bold mr-2">Delete</Text>
                                </TouchableOpacity>
                       </View>
                    </View>
                ))
            ) : (
                <View className='flex items-center justify-center '>
                    <Image 
                        source={no_completed}
                        className='w-40 h-40'
                    />
                    <Text className='font-semibold mt-4'>No completed orders yet</Text>
                </View>
            )}
          </View>
        </ScrollView>
    </SafeAreaView>
    )
}