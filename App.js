import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './components/home/BottomTabs';
import RestaurantDetail from './pages/RestaurantDetail';
import { Provider } from 'react-redux'
import store from './redux/store'
import OrderCheckedOut from './pages/OrderCheckedOut';
import ProfilePage from './pages/ProfilePage';

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
              headerShown: false,
            }}
        >
          <Stack.Screen name='Home' component={BottomTabs} />
          <Stack.Screen name='RestaurantDetail' component={RestaurantDetail} />
          <Stack.Screen name='ProfilePage' component={ProfilePage} />
          <Stack.Screen name='OrderCheckedOut' component={OrderCheckedOut} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

