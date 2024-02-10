import { StyleSheet, Text, View, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../constants/Constants";

const Card = ({ navigation, data, type }) => {
  let styleType;

  switch (data.status) {
    case "ongoing":
      styleType = styles.ongoingCard;
      break;
    case "pending":
      styleType = styles.pendingCard;
      break;
    case "complete":
      styleType = styles.completeCard;
      break;
  }

  const cardOnClick = (id) => {
    // if (type !== "normal") {
    //   const params = {
    //     itemId: id,
    //   };
    //   navigation.navigate("Drawer", {
    //     screen: "Tab",
    //     params: {
    //       screen: "Home",
    //       params: params,
    //     },
    //   });
    // }
  };

  return (
    <Pressable
      style={[styles.card, styleType]}
      onPress={() => cardOnClick(data.id)}
    >
      <View style={styles.cardBody}>
        <View style={styles.cardTitle}>
          <Text style={styles.title}>{data.name}</Text>
        </View>

        <View style={styles.cardInfo}>
          <MaterialCommunityIcons
            name="calendar"
            size={18}
            color={Colors.white}
          />
          <Text style={styles.info}>
            {data.event_start} ~ {data.event_end}
          </Text>
        </View>

        <View style={styles.cardInfo}>
          <MaterialCommunityIcons
            name="map-marker"
            size={18}
            color={Colors.white}
          />
          <Text style={styles.info}>{data.place}</Text>
        </View>
      </View>

      {type === "normal" ? null : (
        <View style={styles.cardIcon}>
          <MaterialCommunityIcons
            name="chevron-right"
            size={24}
            color={Colors.white}
          />
        </View>
      )}
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginHorizontal: "5%",
    marginTop: "5%",
    paddingVertical: "2%",
    paddingHorizontal: "2%",
    borderRadius: 15,
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 1, height: 1 }, // iOS shadow
    shadowOpacity: 0.5, // iOS shadow
    shadowRadius: 4, // iOS shadow
  },
  ongoingCard: {
    backgroundColor: Colors.success,
    height: 160,
  },
  pendingCard: {
    backgroundColor: Colors.warning,
    height: 160,
  },
  completeCard: {
    backgroundColor: Colors.danger,
    height: 160,
  },
  cardBody: {
    width: "91%",
  },
  cardIcon: {
    marginLeft: "2%",
    width: "5%",
    paddingTop: "7%",
  },
  cardTitle: {
    maxHeight: "60%",
  },
  cardInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "2%",
  },
  title: {
    // fontFamily: "SF",
    fontSize: 18,
    color: Colors.white,
  },
  info: {
    // fontFamily: "SF",
    fontSize: 15,
    color: Colors.white,
    paddingLeft: "3%",
  },
});
