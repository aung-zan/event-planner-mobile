import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderOptions } from '../../navigators/NavigatorOptions';

const headerOptions = (params) => {
  const navigation = params.navigation;

  React.useEffect(() => {
    HeaderOptions(params);
  }, [navigation]);
}

const BoothScreen = ({ navigation }) => {
  const navigateBack = "Event";

  headerOptions({ navigation, navigateBack });

  return (
    <View>
      <Text>BoothScreen</Text>
    </View>
  )
}

export default BoothScreen

const styles = StyleSheet.create({})