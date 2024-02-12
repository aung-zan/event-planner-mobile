import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryLegend,
} from "victory-native";
import { Colors } from "../constants/Constants";

const Info = () => {
  return (
    <View style={styles.contianer}>
      <View style={styles.info}>
        <Text style={styles.infoText}>30</Text>
        <Text style={styles.infoText}>Total</Text>
      </View>
    </View>
  );
};

const NormalChart = ({ chartData }) => {};

const GroupChart = ({ chartData }) => {
  return (
    <VictoryChart
      height={295}
      width={600}
      padding={{ left: 30, right: 0, bottom: 80, top: 25 }}
    >
      <VictoryLegend x={125}
        orientation="horizontal"
        gutter={20}
        colorScale={[Colors.success, Colors.danger]}
        data={[{ name: "Enter" }, { name: "Exit" }]}
        style={{ border: { stroke: Colors.black } }}
      />
      <VictoryGroup offset={20} colorScale={[Colors.success, Colors.danger]}>
        <VictoryBar data={chartData} x="hour" y="enter" />
        <VictoryBar data={chartData} x="hour" y="exit" />
      </VictoryGroup>
      <VictoryAxis tickValues={chartData.map((item) => item.hour)} />
      <VictoryAxis dependentAxis />
    </VictoryChart>
  );
};

const Chart = ({ type, data }) => {
  return (
    <>
      <View style={styles.graph}>
        <ScrollView horizontal>
          {type === "group" ? (
            <GroupChart chartData={data} />
          ) : (
            <NormalChart chartData={data} />
          )}
        </ScrollView>

        <Info />
      </View>
    </>
  );
};

export default Chart;

const styles = StyleSheet.create({
  graph: {
    height: "47%",
    marginTop: "4%",
  },
  contianer: {
    marginHorizontal: "4%",
    height: "15%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  info: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  infoText: {
    fontFamily: "SF",
    fontSize: 18,
    color: Colors.black,
  },
});
