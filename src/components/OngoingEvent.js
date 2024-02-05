import Card from "./Card";

const OngoingEvent = ({ navigation, ongoingEvent }) => {
  return (
    <Card navigation={navigation} key={ongoingEvent.id} data={ongoingEvent} />
  );
};

export default OngoingEvent;
