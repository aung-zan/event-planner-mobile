import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SpotScreen from '../screens/spot/SpotScreen';

const Stack = createNativeStackNavigator();

export const SpotNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Spot" component={SpotScreen} />
    </Stack.Navigator>
  );
}