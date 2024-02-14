import { StyleSheet, View } from "react-native";
import React from "react";
import { HeaderOptions } from "../../navigators/NavigatorOptions";
import { useGlobal } from "../../providers/GlobalProvider";
import { getSpot } from "../../api/Spot";
import { getSpotData } from "../../helper/Helper";
import { removeToken } from "../../helper/Storage";
import { Colors, spotSegment } from "../../constants/Constants";
import Loading from "../../components/Loading";
import Segment from "../../components/Segment";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import List from "../../components/List";

const headerOptions = (params) => {
  const navigation = params.navigation;

  React.useEffect(() => {
    HeaderOptions(params);
  }, [navigation]);
};

const getData = (eventID, setData, setAuthenticated, navigation) => {
  React.useEffect(() => {
    const data = navigation.addListener('focus', () => {
      setData(null);
      getSpot(eventID)
      .then((result) => {
        setData(getSpotData(result));
      })
      .catch(async ({ message }) => {
        if (message === "Unauthenticated") {
          await removeToken();
          setAuthenticated(false);
        }
      });
    });

    return data;
  }, [navigation]);
}

const SpotScreen = ({ route, navigation }) => {
  const { setAuthenticated } = useGlobal();
  const navigateBack = "Event";
  const eventID = route.params?.eventID;
  const [data, setData] = React.useState(null);
  const [spotType, setSpotType] = React.useState(1);

  headerOptions({ navigation, navigateBack });

  getData(eventID, setData, setAuthenticated, navigation);
  const entry = data?.entry;
  const exit = data?.exit;

  if (spotType == 1) {
    icon = <MaterialCommunityIcons name="arrow-expand-right" size={24} color={Colors.white} />;
  } else {
    icon = <MaterialCommunityIcons name="arrow-expand-left" size={24} color={Colors.white} />;
  }

  const onPress = (params) => {
    console.log(params);
    navigation.navigate("SpotScanner", params);
  }

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        {data === null ? <Loading /> : (
          <>
            <Segment
              segments={spotSegment}
              segmentType={spotType}
              changeSegmentType={setSpotType}
            />
            <List
              data={spotType === 1 ? entry : exit}
              icon={icon}
              onPress={onPress}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default SpotScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
