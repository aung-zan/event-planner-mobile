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

// fetch data.
const getData = (setData) => {
  React.useEffect(() => {
    getEvents()
      .then((result) => {
        setData(getEventsByTypes(result));
      })
      .catch(({ message }) => {
        // console.log(message);
      });
  }, []);
};

const EventScreen = ({ navigation }) => {
  const [data, setData] = React.useState(null);
  const [segmentType, setSegmentType] = React.useState(1);

  getData(setData);
  const ongoingEvent = data?.ongoing;
  const pendingEvent = data?.pending;
  const completeEvent = data?.complete;

  const changeSegmentType = (type) => {
    setSegmentType(type);
  };

  return (
    <View style={styles.container}>
      {data === null ? <Loading /> :
        <>
          <View style={styles.title}>
            <Text style={styles.titleText}>Ongoing Event</Text>
          </View>

          <OngoingEvent ongoingEvent={ongoingEvent} />

          <Segment
            segments={ListSegment}
            segmentType={segmentType}
            changeSegmentType={changeSegmentType}
          />

          {segmentType == 1 ? (
            <PendingEvent pendingEvent={pendingEvent} />
          ) : (
            <CompleteEvent completeEvent={completeEvent} />
          )}
        </>
      }
    </View>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.secondary
  },
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  title: {
    marginTop: "5%",
    marginHorizontal: "5%",
    justifyContent: "center",
    paddingLeft: "2%",
  },
  titleText: {
    // fontFamily: "SF",
    fontSize: 18,
  },
});
