import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import HomeHeader from '../components/home/HomeHeader/HomeHeader.js'
import SearchBar from '../components/home/SearchBar.js'
import Category from '../components/home/Category.js'
import RestaurantList from '../components/home/RestaurantList/RestaurantList.js'
import { localRestaurants } from '../constants/localRestaurants.js'
import Carousel from '../components/home/Carousel.js'


export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState('helsinki');
  const [category, setCategory] = useState('');

  const YELP_API_KEY = process.env.YELP_API_KEY

  console.log('categoryyyy', category)

  
  const getRestaurantsFromYelp = async () => {
 
    let yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    
    if (category) {
      yelpUrl += `&categories=${category}`; 
    }

    const requestOptions = {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
        },
    };
    console.log('yelpurl', yelpUrl)

    return fetch(yelpUrl, requestOptions)
      .then((res) => res.json())
      .then((data) => setRestaurantData(data.businesses));
  }
  
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, category]);

  
  console.log('restaurantData', restaurantData)

  return (
    <SafeAreaView className="bg-gray-100 flex-1">
        <View className="bg-white p-4">
           <HomeHeader city={city}  navigation={navigation}/>
           <SearchBar setCity={setCity}/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Category setCategory={setCategory} />
          <Carousel />
          <Text className='text-lg font-bold ml-3 pl-2'>Fastest near you</Text>
          <RestaurantList restaurantData={restaurantData} navigation={navigation}/>
        </ScrollView>
    </SafeAreaView>
  )
}