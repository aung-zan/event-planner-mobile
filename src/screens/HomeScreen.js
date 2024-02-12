import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HeaderOptions } from "../navigators/NavigatorOptions";
import { Colors, HomeSegment } from "../constants/Constants";
import { getDashboard } from "../api/Home";
import { useGlobal } from "../providers/GlobalProvider";
import { removeToken } from "../helper/Storage";
import { getHomeData } from "../helper/Helper";
import Card from "../components/Card";
import Loading from "../components/Loading";
import Segment from "../components/Segment";
import Chart from "../components/Chart";

const headerOptions = (params) => {
  const navigation = params.navigation;

  React.useEffect(() => {
    HeaderOptions(params);
  }, [navigation]);
}

const getData = (eventID, setData, setAuthenticated) => {
  React.useEffect(() => {
    getDashboard(eventID)
    .then((result) => {
      setData(getHomeData(result));
    })
    .catch(async ({message}) => {
      if (message === "Unauthenticated") {
        await removeToken();
        setAuthenticated(false);
      }
    });
  }, []);
}

const HomeScreen = ({ route, navigation }) => {
  const { setAuthenticated } = useGlobal();
  const navigateBack = "Event";
  const styleBack = styles.backButton;
  const eventID = route.params?.itemId;
  const [data, setData] = React.useState(null);
  const [segmentType, setSegmentType] = React.useState(1);

  headerOptions({ navigation, navigateBack, styleBack });

  getData(eventID, setData, setAuthenticated);
  const exhibition = data?.exhibition;
  const chartData = data?.chartData;
  const totalVisitor = data?.totalVisitorCount;

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        {data === null ? <Loading /> : (
          <>
            <Card data={exhibition} type="normal" />
            <Segment
              segments={HomeSegment}
              segmentType={segmentType}
              changeSegmentType={setSegmentType}
            />

            {segmentType === 1 ? <Chart type="group" data={chartData} /> : null}
          </>
        )}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  backButton: {
    marginLeft: "10%",
  },
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
