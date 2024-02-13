import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { getEvents } from "../api/EventList";
import { getEventsByTypes } from "../helper/Helper";
import Loading from "../components/Loading";
import { Colors, ListSegment } from "../constants/Constants";
import OngoingEvent from "../components/OngoingEvent";
import PendingEvent from "../components/PendingEvent";
import CompleteEvent from "../components/CompleteEvent";
import Segment from "../components/Segment";
import { useGlobal } from "../providers/GlobalProvider";
import { removeToken } from "../helper/Storage";
import { HeaderOptions } from "../navigators/NavigatorOptions";

const headerOptions = (params) => {
  const navigation = params.navigation;

  React.useEffect(() => {
    HeaderOptions(params);
  }, [navigation]);
};

// fetch data.
const getData = (setData, setAuthenticated) => {
  React.useEffect(() => {
    getEvents()
      .then((result) => {
        setData(getEventsByTypes(result));
      })
      .catch( async ({ message }) => {
        if (message === "Unauthenticated") {
            await removeToken();
            setAuthenticated(false);
        }
      });
  }, []);
};

const EventScreen = ({ navigation }) => {
  const { setAuthenticated } = useGlobal();
  const [data, setData] = React.useState(null);
  const [segmentType, setSegmentType] = React.useState(1);

  headerOptions({ navigation, setAuthenticated });

  getData(setData, setAuthenticated);
  const ongoingEvent = data?.ongoing;
  const pendingEvent = data?.pending;
  const completeEvent = data?.complete;

  const changeSegmentType = (type) => {
    setSegmentType(type);
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        {data === null ? <Loading /> :
          <>
            <View style={styles.title}>
              <Text style={styles.titleText}>Ongoing Event</Text>
            </View>

            <OngoingEvent navigation={navigation} ongoingEvent={ongoingEvent} />

            <Segment
              segments={ListSegment}
              segmentType={segmentType}
              changeSegmentType={changeSegmentType}
            />

            {segmentType == 1 ? (
              <PendingEvent navigation={navigation} pendingEvent={pendingEvent} />
            ) : (
              <CompleteEvent navigation={navigation} completeEvent={completeEvent} />
            )}
          </>
        }
      </View>
    </View>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.secondary
  },
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    marginTop: "5%",
    marginHorizontal: "5%",
    justifyContent: "center",
    paddingLeft: "2%",
  },
  titleText: {
    fontFamily: "SF",
    fontSize: 18,
  },
});
