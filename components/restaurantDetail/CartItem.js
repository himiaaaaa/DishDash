import React from "react";
import { View, Text } from "react-native";

export default function OrderItem({ item }) {
  const { title, price } = item;
  return (
    <View className='flex flex-row justify-between py-5 px-5 border-b border-gray'>
      <Text className="font-semibold text-md">{title}</Text>
      <Text className="opacity-70 text-md">{price}</Text>
    </View>
  );
}