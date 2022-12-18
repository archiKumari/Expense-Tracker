//View for displaying transaction items of a transaction

import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const food = (
  <MaterialCommunityIcons name="food-variant" size={18} color="black" />
);
const education = (
  <MaterialIcons name="cast-for-education" size={18} color="black" />
);
const transport = (
  <MaterialIcons name="emoji-transportation" size={18} color="black" />
);
const shopping = (
  <MaterialIcons name="local-grocery-store" size={18} color="black" />
);
const coffee = <MaterialCommunityIcons name="coffee" size={18} color="black" />;
const stationary = (
  <MaterialCommunityIcons name="pencil-ruler" size={18} color="black" />
);
const others = (
  <MaterialCommunityIcons name="currency-rial" size={18} color="black" />
);
const currency = (
  <MaterialCommunityIcons name="currency-inr" size={18} color="black" />
);

function getIcons(category) {
  switch (category) {
    case "Food":
      return <View style={styles.iconContainer1}>{food}</View>;
      break;
    case "Education":
      return <View style={styles.iconContainer2}>{education}</View>;
      break;
    case "Transport":
      return <View style={styles.iconContainer3}>{transport}</View>;
      break;
    case "Shopping":
      return <View style={styles.iconContainer4}>{shopping}</View>;
      break;
    case "Coffee":
      return <View style={styles.iconContainer5}>{coffee}</View>;
      break;
    case "Stationary":
      return <View style={styles.iconContainer6}>{stationary}</View>;
      break;
    case "Currency":
      return <View style={styles.iconContainer8}>{currency}</View>;
    default:
      return <View style={styles.iconContainer7}>{others}</View>;
      break;
  }
}

function TransactionItem(props) {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        {getIcons(props.category)}
        <Text style={styles.primaryText}>{props.title}</Text>
      </View>
      <View style={styles.innerContainer}>
        {getIcons("Currency")}
        <Text style={styles.primaryText}>{props.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  outerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
    padding: 4,
  },
  primaryText: {
    color: "#d42251",
    fontSize: 18,
  },
  iconContainer1: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginTop: 4,
    marginRight: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f79b11",
  },
  iconContainer2: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginTop: 4,
    marginRight: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#11f7f7",
  },
  iconContainer3: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginTop: 4,
    marginRight: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f73811",
  },
  iconContainer4: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginTop: 4,
    marginRight: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5db1b",
  },
  iconContainer5: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginTop: 4,
    marginRight: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c91c0c",
  },
  iconContainer6: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginTop: 4,
    marginRight: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1bf579",
  },
  iconContainer7: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginTop: 4,
    marginRight: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f51ba9",
  },
  iconContainer8: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginTop: 4,
    marginRight: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fade25",
  },
});

export default TransactionItem;
