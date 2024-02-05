import { ScrollView } from "react-native";
import Card from "./Card";

const CompleteEvent = ({ navigation, completeEvent }) => {
  return (
    <ScrollView>
      {completeEvent.map((item, index) => {
        return <Card navigation={navigation} key={index} data={item} />;
      })}
    </ScrollView>
  );
};

export default CompleteEvent;
