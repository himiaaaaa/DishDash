import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './components/BottomTabs';

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
      </Stack.Navigator>
  </NavigationContainer>
  );
}

