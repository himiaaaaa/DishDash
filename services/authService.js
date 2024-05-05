import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { setUser, clearUser, setError } from "../redux/reducers/profileSlice";
import { setUserData } from "../redux/reducers/profileSlice";

export const handleSignIn = async (auth, email, password, dispatch) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser(userCredential.user));
    } catch (error) {
      console.log('error', error.message)
      dispatch(setError('Failed to sign in, please check your email or password!'));
    }
  };
  
  export const handleSignUp = async (auth, email, password, confirmPassword, displayName, dispatch) => {
    try {
      if (password !== confirmPassword) {
        dispatch(setError("Passwords don't match!"));
        return;
      }
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      await updateProfile(userCredential.user, {
          displayName: displayName,
        });
  
      dispatch(setUser(userCredential.user));
      await setUserData(userCredential.user.uid, { displayName: displayName, email: email });
    } catch (error) {
      console.log('error', error.message)
      dispatch(setError('Failed to sign up!'));
    }
  };
  
  export const handleSignOut = async (auth, dispatch) => {
    try {
      await signOut(auth);
      dispatch(clearUser());
    } catch (error) {
      console.log('error', error.message)
      dispatch(setError('Failed to sign out!'));
    }
  };