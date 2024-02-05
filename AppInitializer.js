import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import StackNavigator from './src/navigators/StackNavigator';
import { useGlobal } from './src/providers/GlobalProvider';

const AppInitializer = () => {
  const { authCheck } = useGlobal();
  const [fontLoaded] = useFonts({
    'SF': require("./assets/font/SF-Pro-Text-Regular.otf")
  });

  const loadApp = async () => {
    await SplashScreen.preventAutoHideAsync();

    if (authCheck && fontLoaded) {
      SplashScreen.hideAsync();
    }
  }

  React.useEffect(() => {
    loadApp();
  }, [authCheck, fontLoaded]);

  return authCheck && fontLoaded ? <StackNavigator /> : null;
}

export default AppInitializer