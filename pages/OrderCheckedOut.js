import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity  } from "react-native";
import { collection, getDocs, query, where, orderBy, limit } from 'firebase/firestore';
import { db } from "../firebase";
import LottieView from "lottie-react-native";
import OrderCompletedItem from "../components/restaurantDetail/OrderCompletedItem/OrderCompletedItem";
import checkMark from '../assets/animations/check-mark.json'
import delivery from '../assets/animations/delivery.json'

export default function OrderCheckedOut({ route, navigation }) {
    const [orders, setOrders] = useState({
        items: [
            {
                title: "Steak Frites",
                description: "Grilled sirloin steak served with crispy French fries",
                price: "€25.99",
                image: "https://i.pinimg.com/564x/84/fc/70/84fc70649716a570b9020fed51727a8b.jpg",
            },
        ],
      });
    const { restaurantName } = route.params;
    //console.log('OrderCheckedOut route', route.params.restaurantName)

    useEffect(() => {
        const fetchLastOrder = async () => {
          try {
            const ordersRef = collection(db, 'orders');
            const q = query(ordersRef, orderBy('createdAt', 'desc'), limit(1));
            const querySnapshot = await getDocs(q);
            
            if (!querySnapshot.empty) {
              querySnapshot.forEach((doc) => {
                setOrders(doc.data());
              });
            } else {
              console.log('No orders found.');
            }
          } catch (error) {
            console.error('Error fetching last order from Firestore: ', error);
          }
        };
    
        fetchLastOrder();
    }, []);

    return (
    <SafeAreaView  className="flex flex-1 bg-white">

      <View className="mt-2 mx-8 flex flex-col items-center h-full">
        <LottieView
          className="h-40 w-40 self-center"
          source={checkMark}
          autoPlay
          speed={0.5}
          loop={false}
        />

        <Text className="text-xl font-bold color-primary pb-5">
            Your order from {restaurantName} is on its way!
        </Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <OrderCompletedItem
            foodsMenu={orders.items}
          />
          <LottieView
            className="h-60 w-60 self-center"
            source={delivery}
            autoPlay
            speed={0.5}
          />
          <TouchableOpacity 
              className='bg-primary rounded-full w-1/2 p-3 mx-auto mt-5 mb-7 flex justify-center items-center' 
              onPress={() => navigation.navigate('Home')}
          >       
              <Text className='text-md font-bold color-white'>Back to Homepage</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
    )
}