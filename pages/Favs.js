import React from "react";
import { useSelector } from "react-redux";
import { View, Text, ScrollView, Image  } from "react-native";
import RestaurantList from "../components/home/RestaurantList/RestaurantList";
import no_fav from '../assets/images/no-fav.png';

export default function Favs({ navigation }) {
    const { items } = useSelector(state => state.favorites.favorites);

    //console.log('itemsss', items)

    const restaurantData = items.map(item => item.favorite);

    return (
    <ScrollView  className="flex bg-white">
        {items.length > 0 ? (
            <View>
               <RestaurantList restaurantData={restaurantData} navigation={navigation}/> 
            </View>
        ) : (
            <View className='flex items-center justify-center mt-56'>
                <Image 
                    source={no_fav}
                    className='w-40 h-40'
                />
               <Text className='font-semibold mt-4'>No Favorites yet</Text> 
            </View>  
        )}
    </ScrollView>
    )
}