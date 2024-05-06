import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.js';
import { setUser, clearUser, setError, clearError } from '../redux/reducers/profileSlice.js';
import { getUserData } from '../redux/reducers/profileSlice.js';
import UserProfile from '../components/auth/UserProfile/UserProfile.js';
import SignInForm from '../components/auth/SignInForm/SignInForm.js';
import SignUpForm from '../components/auth/SignUpForm/SignUpForm.js';

export default function ProfilePage ({ navigation }) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.profile.user);
    const errorMessage = useSelector(state => state.profile.errorMessage);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [displayName, setDisplayName] = useState('');

    //console.log('user', user)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
          if (userAuth) {
            dispatch(setUser(userAuth));
            const userData = await getUserData(userAuth.uid);
            if (userData) {
              setDisplayName(userData.displayName);
            }
          } else {
            dispatch(clearUser());
            setDisplayName('');
          }
        });
    
        return unsubscribe;
    }, [dispatch]); //to keep user logged in even after reloading app 

  
    return (
      <View className='flex flex-1 bg-white py-5'>
        {user.email ? (
          <UserProfile user={user} navigation={navigation} auth={auth} />
        ) : (
          <View>
            {!isSignUp ? (
              <SignInForm 
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                errorMessage={errorMessage}
                setIsSignUp={setIsSignUp}
                clearError={() => dispatch(clearError())}
                auth={auth}
              />
            ) : (
              <SignUpForm
                auth={auth}
                email={email}
                setEmail={setEmail}
                displayName={displayName}
                setDisplayName={setDisplayName}
                password={password}
                setPassword={setPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                errorMessage={errorMessage}
                setIsSignUp={setIsSignUp}
                clearError={() => dispatch(clearError())}
              />
            )}
          </View>
        )}
      </View>
    );
  };
  