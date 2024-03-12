import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { localRestaurants } from "../../constants/localRestaurants";
import { RestaurantImage } from "./RestaurantImage";
import { RestaurantInfo } from "./RestaurantInfo";

export default function RestaurantList() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const YELP_API_KEY = process.env.YELP_API_KEY

  const getRestaurantsFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=helsinki`;

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
  }, []);

  return (
    <>
      {restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          className='p-3 m-2'
        >
            <RestaurantImage item={restaurant}/>
            <RestaurantInfo item={restaurant}/>
        </TouchableOpacity>
      ))}
    </>
  );
}
