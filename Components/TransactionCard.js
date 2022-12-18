import { Text, View, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import TransactionItem from "./TransactionItem";

function viewTransactions(tItems) {
  let viewTitmes = [];
  for (let i = 0; i < tItems.length; i++) {
    const title = tItems[i].title;
    const price = tItems[i].price;
    const category = tItems[i].category;
    viewTitmes.push(<TransactionItem title={title} price={price} category={category} />)
  }
  return viewTitmes;
}

function TransactionCard(props) {
  const item = props.item;
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.item.id)}>
      <View style={styles.outerContainer}>
        <View style={styles.header}>
          <View>
            <Text style={styles.secondaryText}> {item.addDate} </Text>
          </View>
          <View>
            <Text style={styles.secondaryText}> {item.addTime} </Text>
          </View>
        </View>
        {viewTransactions(item.transactionItems)}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    margin: 5,
    padding: 5,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#f7f2f5",
    elevation: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },
  secondaryText: {
    color: "#706669",
    fontSize: 16,
  },
});

export default TransactionCard;
