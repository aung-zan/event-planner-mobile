import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from "../constants/Constants";
import React from "react";

const EmptyData = () => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>There is no data.</Text>
    </View>
  );
};

const NotEmptyData = ({ data, icon, onPress }) => {
  return (
    <ScrollView>

      {data.map((item, index) => {
        const params = {
          itemId: item.id,
          name: item.name,
        };

        return (
          <Pressable
            key={index}
            style={styles.item}
            onPress={() => onPress(params)}
          >
            <View style={styles.itemIcon}>{icon}</View>
            <View style={styles.itemInfo}>
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
            <View>
              <FontAwesome5
                name="chevron-right"
                size={23}
                color={Colors.secondary}
              />
            </View>
          </Pressable>
        );
      })}

    </ScrollView>
  );
};

const List = ({ data, icon, onPress }) => {
  return (
    <View style={styles.listContainer}>
      {data.length === 0 ? (
        <EmptyData />
      ) : (
        <NotEmptyData data={data} icon={icon} onPress={onPress} />
      )}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  listContainer: {
    marginTop: "5%",
    marginHorizontal: "5%",
    height: "64%",
  },
  item: {
    marginTop: "5%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: "4%",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.black,
  },
  itemIcon: {
    marginLeft: "2%",
    borderRadius: 50,
    backgroundColor: Colors.secondary,
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  itemInfo: {
    // borderWidth: 1,
    marginLeft: "10%",
    width: "65%",
  },
  itemText: {
    fontFamily: "SF",
    fontSize: 20,
    color: Colors.black,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontFamily: "SF",
    fontSize: 20,
    color: Colors.light,
  },
});
