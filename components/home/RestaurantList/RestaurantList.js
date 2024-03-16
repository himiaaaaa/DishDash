import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { RestaurantImage } from "./RestaurantImage";
import { RestaurantInfo } from "./RestaurantInfo";

export default function RestaurantList({restaurantData}) {

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
