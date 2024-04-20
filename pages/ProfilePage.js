import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth, db } from '../firebase.js';
import { setUser, clearUser, setError, clearError } from '../redux/reducers/profileSlice.js';
import welcome from '../assets/icons/welcome.png';

const ProfilePage = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.profile.user);
    const errorMessage = useSelector(state => state.profile.errorMessage);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [displayName, setDisplayName] = useState('');

    console.log('user', user)
    console.log('errorMessage', errorMessage)
  
    const handleSignIn = async () => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        dispatch(setUser(userCredential.user));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };
  
    const handleSignUp = async () => {
      try {
        if (password !== confirmPassword) {
          dispatch(setError("Passwords don't match"));
          return;
        }
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(userCredential.user, {
            displayName: displayName,
          });

        dispatch(setUser(userCredential.user));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };
  
    const handleSignOut = async () => {
      try {
        await signOut(auth);
        dispatch(clearUser());
      } catch (error) {
        dispatch(setError(error.message));
      }
    };
  
    return (
      <View className='flex flex-1 bg-white py-5'>
        {user.email ? (
          <View className='flex items-center justify-center w-full'>
          <View className='flex flex-col justify-center items-center w-full h-full pb-6 bg-white'>
            <Image 
                source={welcome}
                resizeMode="contain"
                className="w-30 h-30"
            />
            <Text className='mb-6 text-4xl font-extrabold color-primary text-center'>Welcome to DishDash, {user.displayName}!</Text>
            
            <Text className='mb-2 text-sm text-start w-3/4'>Your Logged in Email</Text>
            
            <View className='flex items-center w-3/4 px-5 py-4 mr-2 bg-secondary rounded-2xl'>
                <Text className='text-sm font-medium '>{user.email}</Text>
            </View>

            <TouchableOpacity 
                onPress={handleSignOut}
                className='w-3/4 px-6 py-3 mt-6 transition duration-300 bg-primary rounded-full'
            >
                <Text className='text-white text-center font-bold text-lg'>Sign Out</Text>
            </TouchableOpacity>

            </View>
          </View>
        ) : (
          <View>
            {!isSignUp ? (
              <View className='flex items-center justify-center w-full'>
                <View className='flex flex-col justify-center items-center w-full h-full pb-6 bg-white'>
                    <Text className='mb-3 text-4xl font-extrabold'>Sign In</Text>
                    <Text className='mb-4'>Enter your email and password</Text>

                    <Text className='mb-2 text-sm text-start w-3/4'>*Email</Text>
                    <TextInput
                      placeholder="Email"
                      onChangeText={setEmail}
                      value={email}
                      autoCapitalize="none"
                      className='flex items-center w-3/4 px-5 py-4 mr-2 text-sm font-medium bg-gray rounded-2xl'
                    />

                    <Text className='mb-2 mt-4 text-sm text-start w-3/4'>*Password</Text>
                    <TextInput
                      placeholder="Password"
                      onChangeText={setPassword}
                      value={password}
                      secureTextEntry
                      className='flex items-center w-3/4 px-5 py-4 mr-2 text-sm font-medium bg-gray rounded-2xl'
                    />

                    <TouchableOpacity 
                        onPress={handleSignIn}
                        className='w-3/4 px-6 py-3 my-8 transition duration-300 bg-primary rounded-full'
                    >
                        <Text className='text-white text-center font-bold text-lg'>Sign In</Text>
                    </TouchableOpacity>
                    <Text onPress={() => setIsSignUp(true)}>Don't have an account? <Text className='font-bold color-primary'>Sign Up</Text></Text>
                </View>
              </View>
            ) : (
              <View className='flex items-center justify-center w-full'>
                <View className='flex flex-col justify-center items-center w-full h-full pb-6 bg-white'>
                    <Text className='mb-3 text-4xl font-extrabold'>Sign Up</Text>

                    <Text className='mb-2 text-sm text-start w-3/4'>*Email</Text>
                    <TextInput
                      placeholder="Email"
                      onChangeText={setEmail}
                      value={email}
                      autoCapitalize="none"
                      className='flex items-center w-3/4 px-5 py-4 mr-2 text-sm font-medium bg-gray rounded-2xl'
                    />

                    <Text className='mb-2 mt-4 text-sm text-start w-3/4'>*Display Name</Text>
                    <TextInput
                      placeholder="Display Name"
                      onChangeText={setDisplayName}
                      value={displayName}
                      autoCapitalize="words"
                      className='flex items-center w-3/4 px-5 py-4 mr-2 text-sm font-medium bg-gray rounded-2xl'
                    />

                    <Text className='mb-2 mt-4 text-sm text-start w-3/4'>*Password</Text>   
                    <TextInput
                      placeholder="Password"
                      onChangeText={setPassword}
                      value={password}
                      secureTextEntry
                      className='flex items-center w-3/4 px-5 py-4 mr-2 text-sm font-medium bg-gray rounded-2xl'
                    />

                    <Text className='mb-2 mt-4 text-sm text-start w-3/4'>*Confirm Password</Text>
                    <TextInput
                      placeholder="Confirm Password"
                      onChangeText={setConfirmPassword}
                      value={confirmPassword}
                      secureTextEntry
                      className='flex items-center w-3/4 px-5 py-4 mr-2 text-sm font-medium bg-gray rounded-2xl'
                    />
                    {errorMessage && <Text className='mb-2 mt-4 text-sm text-start w-3/4 color-primary'>{errorMessage}</Text>}
                    <TouchableOpacity 
                        onPress={handleSignUp}
                        className='w-3/4 px-6 py-3 my-8 transition duration-300 bg-primary rounded-full'
                    >
                        <Text className='text-white text-center font-bold text-lg'>Sign Up</Text>
                    </TouchableOpacity>
                    <Text onPress={() => setIsSignUp(false)}>Already have an account? <Text className='font-bold color-primary'>Sign In</Text></Text>
                </View>
              </View>
            )}
          </View>
        )}
      </View>
    );
  };
  
  export default ProfilePage;