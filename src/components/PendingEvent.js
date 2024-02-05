import { ScrollView } from "react-native";
import Card from "./Card";

const PendingEvent = ({ navigation, pendingEvent }) => {
  return (
    <ScrollView>
      {pendingEvent.map((item, index) => {
        return <Card navigation={navigation} key={index} data={item} />;
      })}
    </ScrollView>
  );
};

export default PendingEvent;
