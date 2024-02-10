import { Pressable, StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../constants/Constants';
import React from 'react'

const Logout = ({ onPress }) => {
  return (
    <View>
      <Pressable onPress={onPress}>
        <MaterialCommunityIcons name="logout" size={26} color={Colors.white} />
      </Pressable>
    </View>
  )
}

export default Logout

const styles = StyleSheet.create({})