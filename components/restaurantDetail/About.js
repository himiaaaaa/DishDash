import React from "react";
import { View, Text, Image } from "react-native";

export default function About({ route }) {
  const { name, image_url, price, rating, categories } = route.params.restaurant;

  const dotCategories = categories.map((c) => c.title).join(" • ");

  const pricePlusRating = `${rating} ⭐ • ${ price ?? ""}` ;

  return (
    <View>

      <Image 
        source={{ uri: image_url || 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} 
        className="w-full h-48"
      />

      
      <Text className="uppercase first-letter:text-3xl -mt-8 px-4 text-white border-primary font-extrabold">
        {name}
      </Text> 

      <Text className="mt-2 mx-4 text-base font-normal">
        {dotCategories}
        {"\n"}
        {pricePlusRating}
      </Text>

    </View>
  );
}

