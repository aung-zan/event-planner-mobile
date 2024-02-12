import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { BoothNavigator, SeminarNavigator, SpotNavigator, SurveyNavigator } from "./ScannerStackNavigator";
import TabBar from "../components/TabBar";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Spots" component={SpotNavigator} />
      <Tab.Screen name="Booths" component={BoothNavigator} />
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: true }} />
      <Tab.Screen name="Seminars" component={SeminarNavigator} />
      <Tab.Screen name="Surveys" component={SurveyNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
