import { Pressable, StyleSheet, Text, View } from "react-native";
import { TabIcons, Colors, scannerNavigator } from "../constants/Constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const ActiveTab = ({ icon, iconSize, label }) => {
  return (
    <>
      <View style={styles.isActive}>
        <MaterialCommunityIcons
          name={icon}
          size={iconSize}
          color={Colors.secondary}
        />
      </View>
      <Text style={styles.text}>{label}</Text>
    </>
  );
};

const NormalTab = ({ icon, iconSize }) => {
  return (
    <MaterialCommunityIcons name={icon} size={iconSize} color={Colors.white} />
  );
}

const TabBar = ({ state, descriptors, navigation }) => {
  const showTab = ["Home"];

  const [hideTab, setHideTab] = React.useState(false);
  const [eventID, setEventID] = React.useState(null);

  React.useLayoutEffect(() => {
    const routes = state.routes;
    const homeRoute = routes[2];

    if (homeRoute.params?.eventID) {
      setEventID(homeRoute.params.eventID);
    }

  }, [state, descriptors]);

  return (
    <View style={hideTab ? styles.hideContainer : styles.container}>
      {state.routes.map((route, index) => {
        const label = route.name;
        const icon = TabIcons[label];
        const iconSize = 24;
        const isFocused = state.index === index;

        if (label === "Visitor" || label === "Noti") {
          return null;
        }

        const onPress = () => {
          if (label === "Home") {
            navigation.navigate(label, route.params);
          } else {
            navigation.navigate(label, {
              screen: scannerNavigator[label],
              params: {
                eventID: eventID
              }
            });
          }
        };

        return (
          <Pressable onPress={onPress} style={styles.button} key={route.key}>
            {isFocused ? (
              <ActiveTab icon={icon} iconSize={iconSize} label={label} />
            ) : (
              <NormalTab icon={icon} iconSize={iconSize} />
            )}
          </Pressable>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  hideContainer: {},
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 100,
    width: "90%",
    marginLeft: "5%",
    borderRadius: 15,
    position: "absolute",
    bottom: 25,
    backgroundColor: Colors.secondary,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: "70%",
    width: "20%",
  },
  isActive: {
    alignItems: "center",
    justifyContent: "center",
    height: "75%",
    width: "75%",
    marginBottom: "5%",
    borderRadius: 50,
    backgroundColor: Colors.white,
  },
  text: {
    fontFamily: "SF",
    color: Colors.white,
    fontSize: 16,
  },
});
