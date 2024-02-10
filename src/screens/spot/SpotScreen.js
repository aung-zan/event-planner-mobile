import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HeaderOptions } from "../../navigators/NavigatorOptions";
import { useGlobal } from "../../providers/GlobalProvider";

const headerOptions = (params) => {
  const navigation = params.navigation;

  React.useEffect(() => {
    HeaderOptions(params);
  }, [navigation]);
}

const SpotScreen = ({ navigation }) => {
  const { setAuthenticated } = useGlobal();
  const navigateBack = "Event";

  headerOptions({ navigation, setAuthenticated, navigateBack });

  return (
    <View>
      <Text>SpotScreen</Text>
    </View>
  );
};

export default SpotScreen;

const styles = StyleSheet.create({});
