import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { handleSignOut } from '../../../services/authService';
import welcome from '../../../assets/images/welcome.png';

const UserProfile = ({ user, auth, navigation }) => {
    const dispatch = useDispatch();

    return (
        <View className="flex items-center justify-center w-full">
            <View className="flex flex-col justify-center items-center w-full h-full pb-6 bg-white">
                <Image
                    source={welcome}
                    resizeMode="contain"
                    className="w-36 h-36"
                />
                <Text className="mb-6 text-4xl font-extrabold color-primary text-center">
                    Welcome to DishDash, {user.displayName}!
                </Text>
                <Text className="mb-2 text-sm text-start w-3/4">
                    Your Logged-in Email
                </Text>
                <View className="flex items-center w-3/4 px-5 py-4 mr-2 bg-secondary rounded-2xl">
                    <Text className="text-sm font-medium">{user.email}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    className="w-3/4 px-6 py-3 mt-6 transition duration-300 bg-primary rounded-full"
                >
                    <Text className="text-white text-center font-bold text-lg">
                        Back To Homepage
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleSignOut(auth, dispatch)}
                    className="w-3/4 px-6 py-3 mt-6 transition duration-300 bg-primary rounded-full"
                >
                    <Text className="text-white text-center font-bold text-lg">
                        Sign Out
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default UserProfile;