import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderOptions } from '../../navigators/NavigatorOptions';

const headerOptions = (params) => {
  const navigation = params.navigation;

  React.useEffect(() => {
    HeaderOptions(params);
  }, [navigation]);
}

const SeminarScreen = ({ navigation }) => {
  const navigateBack = "Event";

  headerOptions({ navigation, navigateBack });

  return (
    <View>
      <Text>SeminarScreen</Text>
    </View>
  )
}

export default SeminarScreen

const styles = StyleSheet.create({})