import react, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from 'react-redux';
import { AddToFavorites, RemoveFromFavorites, FetchFavorites } from '../../../../redux/reducers/favouriteSlice';
import { useSelector } from 'react-redux';

export const RestaurantImage = ({ item, navigation }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const { uid } = useSelector(state => state.profile.user);
  const { items } = useSelector(state => state.favorites.favorites);

  useEffect(() => {
    dispatch(FetchFavorites(uid));
  }, [dispatch, uid]);

  useEffect(() => {
    setIsFavorite(items.some(favorite => favorite.favorite.name === item.name));
  }, [items, item.id]);

  const toggleFavorite = () => {
    if (!uid) {
      navigation.navigate('ProfilePage')
      return;
    }
  
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      dispatch(RemoveFromFavorites({ uid, favorite: item }));
    } else {
      dispatch(AddToFavorites({ uid, favorite: item }));
    }
  };

  return (
    <View className="static">
      {/* image */}
      <Image
        testID='restaurant-image'
        resizeMode="cover"
        source={{ uri: item.image_url || 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
        className='width-full h-60 rounded-3xl'
      />

      {/* favorite heart */}
      <TouchableOpacity 
        testID='toggle-favorite'
        className='absolute right-5 top-5'
        onPress={toggleFavorite}
      >
        <MaterialCommunityIcons 
          testID='favorite-heart'
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={25}
          color={isFavorite ? '#fb923c' : '#fff'}
        />
      </TouchableOpacity>

      {/* delivery time */}
      <View className='absolute bottom-0 left-0 h-10 w-40 bg-white rounded-tr-3xl rounded-bl-3xl flex items-center justify-center'>
        <Text className='font-semibold'>35 - 40 min</Text>
      </View>
    </View>
 )
};