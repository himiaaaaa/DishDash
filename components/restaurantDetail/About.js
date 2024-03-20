import React from "react";
import { View, Text, Image } from "react-native";

export default function About({ route }) {
  const { name, image_url, rating, categories } = route.params.restaurant;

  const ratingStar = `• ${rating} ⭐` ;

  return (
    <View>

      {/* header image */}
      <Image 
        source={{ uri: image_url || 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} 
        className="w-full h-48"
      />

      {/* header info */}
      <View className='flex-row space-x-3 -mt-7 bg-white rounded-tr-full w-2/3 justify-center'>
        <Text className="uppercase text-xl font-medium">
          {name}
        </Text> 
        <Text className="text-xl font-medium">
         {ratingStar}
        </Text>
      </View>
    
      <View className='flex-row mb-5'>
        {categories?.map((category, index) => {
            return (
                <Text key={index} className='bg-primary ml-2 mt-3 p-1 text-s text-white font-medium shadow-sm shadow-primary'>
                  {category.title}
                </Text>  
            )
        })}
      </View>
    
    </View>
  );
}

