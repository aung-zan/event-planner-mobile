import { Pressable, StyleSheet, Text, View } from "react-native";
import { TabIcons, Colors } from "../constants/Constants";
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
  const [hideTab, setHideTab] = React.useState(false);

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
          navigation.navigate(route.name, route.params);
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
