import { View, Text } from "react-native";

export const RestaurantInfo = ({ item }) => (
    <View className='flex-row justify-between p-2'>
        <View>
          <Text className='font-semibold text-xl'>{item?.name}</Text>
            <View className='flex-row'>
                {item?.categories?.map((category, index) => {
                    return (
                        <Text key={index} className=' bg-primary mr-2 mt-1 p-1 text-s text-white font-medium shadow-sm shadow-primary'>{category.title}{" "}</Text>  
                    )
                })}
            </View>
        </View>
        <View className='bg-white h-10 w-10 rounded-full p-2 justify-center self-center'>
          <Text>{item?.rating}</Text>
        </View>
    </View>
);