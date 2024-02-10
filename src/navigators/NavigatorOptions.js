import { StyleSheet } from 'react-native';
import Logout from '../components/Logout';
import { removeToken } from '../helper/Storage';
import { Colors } from '../constants/Constants';
import React from 'react'

const logout = (setAuthenticated) => {
  const onPress = async () => {
    setAuthenticated(false);
    await removeToken();
  };

  return () => <Logout onPress={onPress} />;
}

export const HeaderOptions = (params) => {
  const options = {};
  const navigation = params.navigation;
  const setAuthenticated = params?.setAuthenticated;

  if (setAuthenticated) {
    options.headerRight = logout(setAuthenticated);
  }

  options.headerStyle = { backgroundColor: Colors.secondary };
  options.headerTitleStyle = { fontFamily: "SF", color: Colors.white };
  options.headerShadowVisible = false;

  navigation.setOptions(options);
}

const style = StyleSheet.create({

});