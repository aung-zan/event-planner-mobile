import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderOptions } from '../../navigators/NavigatorOptions';

const headerOptions = (params) => {
  const navigation = params.navigation;

  React.useEffect(() => {
    HeaderOptions(params);
  }, [navigation]);
}

const SurveyScreen = ({ navigation }) => {
  const navigateBack = "Event";

  headerOptions({ navigation, navigateBack });

  return (
    <View>
      <Text>SurveyScreen</Text>
    </View>
  )
}

export default SurveyScreen

const styles = StyleSheet.create({})