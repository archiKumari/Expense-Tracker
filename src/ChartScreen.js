import { StyleSheet, View, Modal, Pressable, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import pieChartData from "./PieChartData";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

function ChartScreen(props) {

  console.log(pieChartData[0]);

  return (
    <Modal visible={props.visible} animationType="slide" style={styles.modal}>
    <StatusBar style="auto" />
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
        <Pressable style={styles.closeIcon} onPress={props.onCancel}>
          <Ionicons name="md-close" size={35} color="black" />
        </Pressable>
        </View>
        <View style={styles.chartContainer}>
      <PieChart
        data={pieChartData}
        width={Dimensions.get('window').width}
        height={200}
        chartConfig={{color: (opacity = 3) => `rgba(255, 255, 255, ${opacity})`}}
        accessor={"amount"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        />
        </View>
    </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  closeIcon: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 15,
    marginVertical: 10,
  },
  modal: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",    
  },
  chartContainer: {
    marginTop: 120,
  },
})

export default ChartScreen;
