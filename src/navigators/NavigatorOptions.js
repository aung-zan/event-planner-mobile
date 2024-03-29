import { StyleSheet } from 'react-native';
import Logout from '../components/Logout';
import { removeToken } from '../helper/Storage';
import { Colors } from '../constants/Constants';
import { HeaderBackButton } from "@react-navigation/elements";
import React from 'react'

const logout = (setAuthenticated) => {
  const onPress = async () => {
    setAuthenticated(false);
    await removeToken();
  };

  return () => <Logout onPress={onPress} />;
}

const back = (navigation, navigateBack, styleBack) => {
  return () => (
    <HeaderBackButton
      labelVisible={false}
      onPress={() => {
        navigation.navigate(navigateBack);
      }}
      tintColor={Colors.white}
      style={styleBack}
    />
  );
}

export const HeaderOptions = (params) => {
  const options = {};
  const navigation = params.navigation;
  const setAuthenticated = params?.setAuthenticated;

  const navigateBack = params?.navigateBack;
  const styleBack = params?.styleBack;

  if (setAuthenticated) {
    options.headerRight = logout(setAuthenticated);
  }

  if (navigateBack) {
    options.headerLeft = back(navigation, navigateBack, styleBack);
  }

  options.headerStyle = { backgroundColor: Colors.secondary };
  options.headerTitleStyle = { fontFamily: "SF", color: Colors.white };
  options.headerShadowVisible = false;

  navigation.setOptions(options);
}