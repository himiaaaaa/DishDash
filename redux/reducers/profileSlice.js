import { createSlice } from '@reduxjs/toolkit';

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
  },
});

export const { setUser, clearUser, setError, clearError } = profileSlice.actions;

export default profileSlice.reducer;
