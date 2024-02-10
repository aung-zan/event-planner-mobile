import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useGlobal } from "../providers/GlobalProvider";
import LoginScreen from "../screens/LoginScreen";
import EventScreen from "../screens/EventScreen";
import TabNavigator from "../navigators/TabNavigator";

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
          <>
            <Stack.Screen name="Event" component={EventScreen} />
            <Stack.Screen name="Tab" component={TabNavigator} options={{ headerShown: false }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
