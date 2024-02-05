import { createNativeStackNavigator } from '@react-navigation/native-stack'
import EventScreen from '../screens/EventScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Event" component={EventScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator