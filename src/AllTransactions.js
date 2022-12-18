import React, { useState } from "react";
import {
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  View,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

import InitialTransactions from "./Transactions";
import TransactionCard from "../Components/TransactionCard";
import Header from "../Components/Header";
import AddTransaction from "./AddTransaction";
import ChartScreen from "./ChartScreen";

function AllTransactions() {
  const [isModalVisible, setModalVisibility] = useState(false);
  const [transactions, setNewTransaction] = useState(InitialTransactions);
  const [expense, setExpense] = useState(8560);
  const [isPieChartVisible, setPieChartVisibility] = useState(false);

  function addTransactionHandler(enteredTransaction) {
    setNewTransaction((currentTransactions) => [
      ...currentTransactions,
      {
        transactionItems: enteredTransaction.transactionItems,
        addDate: enteredTransaction.addDate,
        addTime: enteredTransaction.addTime,
        id: enteredTransaction.id,
      },
    ]);
    setExpense(expense + getPrices(enteredTransaction.transactionItems));

    endAddTransactionHandler();
  }

  function getPrices(transactions) {
    let prices = 0;
    for (let i = 0; i < transactions.length; i++) {
      prices = prices + parseInt(transactions[i].price);
    }
    return prices;
  }

  function startAddTransactionHandler() {
    setModalVisibility(true);
  }

  function endAddTransactionHandler() {
    setModalVisibility(false);
  }

  function deleteHandler(id) {
    setNewTransaction((currentTransactions) => {
      let tran = currentTransactions.filter(
        (transaction) => transaction.id === id
      );
      const exp = getPrices(tran[0]);
      setExpense(expense + exp);
      return currentTransactions.filter((transaction) => transaction.id !== id);
    });
  }

  function viewPieChart() {
    setPieChartVisibility(true);
  }

  function closePieChart() {
    setPieChartVisibility(false);
  }

  return (
    <ImageBackground
      source={require("../assets/Images/background.jpg")}
      style={styles.rootScreen}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}
    >
      <StatusBar style="auto" />
      <View style={styles.upperContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>All Transactions</Text>
          <Pressable onPress={viewPieChart}>
            <View style={styles.buttonContainer}>
            <AntDesign name="piechart" size={30} color="white" />
            </View>
          </Pressable>
        </View>
        <Header addExpense={expense} />
      </View>
      <ChartScreen visible={isPieChartVisible} onCancel={closePieChart} />
      <AddTransaction
        visible={isModalVisible}
        onAddTransaction={addTransactionHandler}
        onCancel={endAddTransactionHandler}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={transactions}
          renderItem={(item) => (
            <TransactionCard item={item.item} onDeleteItem={deleteHandler} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <Pressable onPress={startAddTransactionHandler}>
        <View style={styles.buttonContainer}>
          <Ionicons name="add-circle" size={60} color="#0d0f8c" />
        </View>
      </Pressable>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backgroundImage: {
    opacity: 0.6,
  },
  text: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
  },
  upperContainer: {
    marginTop: 40,
    justifyContent: "flex-start",
    flex: 2,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingBottom: 10,
    paddingRight: 5,
  },
  title: {
    fontSize: 40,
    fontWeight: "400",
    color: "#0d0f8c",
    marginLeft: 10,
  },
  listContainer: {
    flex: 4,
    paddingHorizontal: 15,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default AllTransactions;
