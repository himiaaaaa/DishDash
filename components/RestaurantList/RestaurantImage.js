import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const RestaurantImage = ({ item }) => (
    <View className="static">
      <Image
        resizeMode="cover"
        source={{ uri: item?.image_url }}
        className='width-full h-60 rounded-3xl'
      />
      <TouchableOpacity className='absolute right-5 top-5'>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
      </TouchableOpacity>
      <View className='absolute bottom-0 left-0 h-10 w-40 bg-white rounded-tr-3xl rounded-bl-3xl flex items-center justify-center'>
        <Text className='font-semibold'>35 - 40 min</Text>
      </View>
    </View>
);