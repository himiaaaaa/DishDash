import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './components/home/BottomTabs';
import RestaurantDetail from './pages/RestaurantDetail';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerShown: false,
          }}
      >
        <Stack.Screen name='Home' component={BottomTabs} />
        <Stack.Screen name='RestaurantDetail' component={RestaurantDetail} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

