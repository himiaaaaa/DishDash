import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { handleSignIn } from '../../../services/authService';
import Notification from '../../notification/Notification';

const SignInForm = ({ auth, email, setEmail, password, setPassword, errorMessage, setIsSignUp, clearError }) => {
    const dispatch = useDispatch();

    return (
        <View className="flex items-center justify-center w-full">
            <View className="flex flex-col justify-center items-center w-full h-full pb-6 bg-white">
                <Text className="mb-3 text-4xl font-extrabold" testID='sign-in-text'>Sign In</Text>
                <Text className="mb-4">Enter your email and password</Text>

                <Text className="mb-2 text-sm text-start w-3/4">*Email</Text>
                <TextInput
                    placeholder="Email"
                    onChangeText={setEmail}
                    value={email}
                    autoCapitalize="none"
                    className="flex items-center w-3/4 px-5 py-4 mr-2 text-sm font-medium bg-gray rounded-2xl"
                />

                <Text className="mb-2 mt-4 text-sm text-start w-3/4">*Password</Text>
                <TextInput
                    placeholder="Password"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                    className="flex items-center w-3/4 px-5 py-4 mr-2 text-sm font-medium bg-gray rounded-2xl"
                />

                <Notification errorMessage={errorMessage} clearError={clearError} />

                <TouchableOpacity
                    onPress={() => handleSignIn(auth, email, password, dispatch)}
                    className="w-3/4 px-6 py-3 my-8 transition duration-300 bg-primary rounded-full"
                >
                    <Text className="text-white text-center font-bold text-lg" testID='sign-in-btn'>
                        Sign In
                    </Text>
                </TouchableOpacity>
                <Text onPress={() => setIsSignUp(true)}>
                    Don't have an account?{' '}
                    <Text className="font-bold color-primary">Sign Up</Text>
                </Text>
            </View>
        </View>
    );
};

export default SignInForm;