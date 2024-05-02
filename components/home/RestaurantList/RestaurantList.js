import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { RestaurantImage } from "./RestaurantImage";
import { RestaurantInfo } from "./RestaurantInfo";

export default function RestaurantList({restaurantData, navigation}) {

  return (
    <>
      {restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          className='p-3 m-2'
          onPress = {()=> navigation.navigate('RestaurantDetail', {
            restaurant: restaurant
        })}
        >
            <RestaurantImage item={restaurant} navigation={navigation}/>
            <RestaurantInfo item={restaurant}/>
        </TouchableOpacity>
      ))}
    </>
  );
}
