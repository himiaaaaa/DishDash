import { View, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper';
import variety_food from '../../../assets/images/carousel/variety_food.png'
import tasty_food from '../../../assets/images/carousel/tasty_food.png'
import special_menu from '../../../assets/images/carousel/special_menu.png'

export default function Carousel() {
    
    return(
        <Swiper className='h-64 p-5' testID='carousel-slide'>
            <View className='shadow-md'>
              <Image source={tasty_food} className='h-52 w-96 rounded-lg'/>
            </View>
            <View className='shadow-lg'>
              <Image source={special_menu} className='h-52 w-96 rounded-md'/>
            </View>
            <View className='shadow-lg'>
              <Image source={variety_food} className='h-52 w-96 rounded-md'/>
            </View>
        </Swiper>
    )
}