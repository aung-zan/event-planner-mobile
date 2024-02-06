import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useGlobal } from "../providers/GlobalProvider";
import LoginScreen from "../screens/LoginScreen";
import EventScreen from "../screens/EventScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { authenticated } = useGlobal();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!authenticated ? (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen name="Event" component={EventScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
