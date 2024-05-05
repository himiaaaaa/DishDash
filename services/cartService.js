import { AddToCart, RemoveFromCart } from "../redux/reducers/cartSlice";

export const handleAddToCart = async (dispatch, food, restaurantName, email, isAuthenticated, navigation) => {
    if (!isAuthenticated) {
        await navigation.navigate('ProfilePage');
    } else {
        dispatch(AddToCart({ ...food, restaurantName, email }));
    }
};

export const handleRemoveFromCart = async (dispatch, food, restaurantName, email, isAuthenticated, navigation) => {
    if (!isAuthenticated) {
        await navigation.navigate('ProfilePage');
    } else {
        dispatch(RemoveFromCart({ ...food, restaurantName, email }));
    }
};
