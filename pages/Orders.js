import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image  } from "react-native";
import { collection, getDocs, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from "../firebase";
import OrderCompletedItem from "../components/restaurantDetail/OrderCompletedItem";
import { format } from 'date-fns';
import dot from '../assets/icons/dot.png';

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

    const fetchCompletedOrders = async () => {
        try {
            if (!email) {
                navigation.navigate('ProfilePage');
                return;
            }
            
            const ordersRef = collection(db, 'orders');
            const q = query(ordersRef, where("userEmail", "==", email), orderBy('createdAt', 'desc'));
            
            // const querySnapshot = await getDocs(q);

            // const completedOrders = [];
            // querySnapshot.forEach((doc) => {

            //     completedOrders.push(doc.data());
            // });

            // console.log('Completed orders', completedOrders)

            // setOrders(completedOrders);

            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const completedOrders = [];
                querySnapshot.forEach((doc) => {
                    completedOrders.push(doc.data());
                });
                setOrders(completedOrders);
                console.log('Completed orders', completedOrders)
            });

            return unsubscribe;

        } catch (error) {
            console.error('Error fetching completed orders from Firestore: ', error);
        }
    };

    useEffect(() => {
        fetchCompletedOrders();
    }, []);

    const formatOrderDate = (timestamp) => {
        const date = timestamp ? new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000) : new Date();
        return format(date, "Pp");
    };

    return (
    <SafeAreaView  className="flex flex-1 bg-white">

      <View className="mt-2 flex flex-col items-center h-full">
      <ScrollView showsVerticalScrollIndicator={false}>
        {orders.length > 0 ? (
            orders.map((order, index) => (
                <View key={index} className='flex flex-col py-2 px-2 bg-secondary rounded-lg mb-5'>
                   <View className='flex flex-row justify-between items-center mx-2 mb-2 '>
                        <Text className='font-extrabold text-xl'>{order.restaurantName}</Text>
                        <View className=''>
                            <Text className='font-semibold'><Image source={dot} className='w-3 h-3 mr-2'/>Completed order</Text>
                            <Text className='font-thin text-sm'>{formatOrderDate(order.createdAt)}</Text>
                        </View>
                   </View>
                   <OrderCompletedItem
                        foodsMenu={order.items}
                   /> 
                   <View className='flex flex-row gap-2 pl-2'>
                        <Text className='font-semibold color-primary'>Sum:</Text>
                        <Text className='font-normal color-primary'>€{order.pricePlusDelivery}</Text>
                   </View>
                </View>
            ))
        ) : (
            <Text>No completed orders found</Text>
        )}
      </ScrollView>
      </View>
    </SafeAreaView>
    )
}