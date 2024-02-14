import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SpotScreen from "../screens/spot/SpotScreen";
import BoothScreen from "../screens/booth/BoothScreen";
import SeminarScreen from "../screens/seminar/SeminarScreen";
import SurveyScreen from "../screens/survey/SurveyScreen";
import SpotScannerScreen from "../screens/spot/SpotScannerScreen";
import BoothScannerScreen from "../screens/booth/BoothScannerScreen";
import SeminarScannerScreen from "../screens/seminar/SeminarScannerScreen";

const Stack = createNativeStackNavigator();

export const SpotNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Spot" component={SpotScreen} />
      <Stack.Screen name="SpotScanner" component={SpotScannerScreen} />
    </Stack.Navigator>
  );
};

export const BoothNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Booth" component={BoothScreen} />
      <Stack.Screen name="BoothScanner" component={BoothScannerScreen} />
    </Stack.Navigator>
  );
};

export const SeminarNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Seminar" component={SeminarScreen} />
      <Stack.Screen name="SeminarScanner" component={SeminarScannerScreen} />
    </Stack.Navigator>
  );
};

export const SurveyNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Survey" component={SurveyScreen} />
    </Stack.Navigator>
  );
};
