import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { SpotNavigator } from "./ScannerStackNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Spots" component={SpotNavigator} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
