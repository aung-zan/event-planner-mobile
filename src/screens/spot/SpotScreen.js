import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HeaderOptions } from "../../navigators/NavigatorOptions";

const headerOptions = (params) => {
  const navigation = params.navigation;

  React.useEffect(() => {
    HeaderOptions(params);
  }, [navigation]);
}

const SpotScreen = ({ navigation }) => {
  const navigateBack = "Event";

  headerOptions({ navigation, navigateBack });

  return (
    <View>
      <Text>SpotScreen</Text>
    </View>
  );
};

export default SpotScreen;

const styles = StyleSheet.create({});
