import { createSlice } from '@reduxjs/toolkit';
import { db } from '../../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const initialState = {
    user: {
      email: null,
      displayName: null,
      uid: null,
    },
    isAuthenticated: false,
    errorMessage: '',
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { email, displayName, uid } = action.payload;
      state.user = {
        email: email,
        displayName: displayName,
        uid: uid,
      };
      state.isAuthenticated = true;
      state.errorMessage = '';
    },
    clearUser: (state) => {
      state.user = {
        email: null,
        displayName: null,
        uid: null,
      };
      state.isAuthenticated = false;
      state.errorMessage = '';
    },
    setError: (state, action) => {
      state.errorMessage = action.payload;
    },
    clearError: (state) => {
      state.errorMessage = '';
    },
    updateDisplayName: (state, action) => {
      state.user.displayName = action.payload;
    },
  },
});

export const { setUser, clearUser, setError, clearError, updateDisplayName } = profileSlice.actions;

export const setUserData = async (uid, userData) => {
  try {
    const userRef = doc(db, 'users', uid);
    await setDoc(userRef, userData);
  } catch (error) {
    console.error("Error writing document: ", error);
  }
};

export const getUserData = async (uid) => {
  try {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      return userSnap.data();
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error("Error getting document: ", error);
  }
};

export default profileSlice.reducer;
