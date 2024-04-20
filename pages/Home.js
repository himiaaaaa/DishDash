import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import HomeHeader from '../components/home/HomeHeader.js'
import SearchBar from '../components/home/SearchBar.js'
import Category from '../components/home/Category.js'
import RestaurantList from '../components/home/RestaurantList/RestaurantList.js'
import { localRestaurants } from '../constants/localRestaurants.js'


export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState('helsinki');
  const YELP_API_KEY = process.env.YELP_API_KEY
  
  const getRestaurantsFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
  
    const requestOptions = {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
        },
    };
  
    return fetch(yelpUrl, requestOptions)
      .then((res) => res.json())
      .then((data) => setRestaurantData(data.businesses));
  }
  
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city]);

  return (
    <SafeAreaView className="bg-gray-100 flex-1">
        <View className="bg-white p-4">
           <HomeHeader city={city}  navigation={navigation}/>
           <SearchBar setCity={setCity}/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Category />
          <RestaurantList restaurantData={restaurantData} navigation={navigation}/>
        </ScrollView>
    </SafeAreaView>
  )
}