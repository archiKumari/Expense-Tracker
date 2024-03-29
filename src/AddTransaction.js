// import React from "react";
import { useState } from "react";
import { Input } from "react-native-elements";
import { Dialog, CheckBox } from "@rneui/themed";
import {
  StyleSheet,
  ImageBackground,
  Modal,
  Text,
  View,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

function AddTransaction(props) {
  const [enteredItem, setEnteredItem] = useState("");
  const [enteredPrice, setEnteredPrice] = useState(0);
  const [enteredCategory, setCategory] = useState("Others");
  const [transactionItems, setTransactionItems] = useState([]);
  const [currentId, setCurrentId] = useState(9);
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(0);

  function handleTitleInput(enteredValue) {
    setEnteredItem(enteredValue);
  }
  function handlePriceInput(enteredValue) {
    setEnteredPrice(enteredValue);
  }
  function handleCategoryInput(enteredCategory) {
    setCategory(enteredCategory);
  }

  function addTransactionHandler() {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    const transaction = {
      transactionItems: transactionItems,
      id: currentId,
      addDate: date + "-" + "Nov",
      addTime: hours + ":" + min,
    };
    props.onAddTransaction(transaction);
    setCurrentId(currentId+1);
    setTransactionItems([]);
  }

  function addTransactionItemHandler() {
    setTransactionItems((currentTransactionItems) => [...currentTransactionItems,
    {
      title: enteredItem,
      price: enteredPrice,
      category: enteredCategory,
    }]);
    setEnteredItem("");
    setEnteredPrice(0);
    setCategory("Others");
  }

  const toggleDialog = () => {
    setVisible(!visible);
  };

  return (
    <Modal visible={props.visible} animationType="slide" style={styles.modal}>
      <ImageBackground
        source={require("../assets/Images/background.jpg")}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <StatusBar style="auto" />
        <Pressable style={styles.closeIcon} onPress={props.onCancel}>
          {/* <Ionicons name="md-close" size={35} color="black" /> */}
          <AntDesign name="close" size={35} color="black" />
        </Pressable>
        <Text style={styles.title}>New Transaction</Text>
        <View style={styles.outerContainer}>
          <View style={styles.inputContainer}>
            <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
              <Dialog.Title title="Select Category" />
              {[
                "Food",
                "Education",
                "Transport",
                "Shopping",
                "Coffee",
                "Stationary",
                "Others",
              ].map((l, i) => (
                <CheckBox
                  key={i}
                  title={l}
                  containerStyle={{ backgroundColor: "white", borderWidth: 0 }}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={checked === i + 1}
                  onPress={() => {
                    setCategory(l);
                    setChecked(i + 1);
                  }}
                />
              ))}

              <Dialog.Actions>
                <View style={styles.dialogButtonContainer}>
                  <Dialog.Button title="CANCEL" onPress={toggleDialog} />
                  <Dialog.Button
                    title="CONFIRM"
                    onPress={() => {
                      handleCategoryInput;
                      toggleDialog();
                    }}
                  />
                </View>
              </Dialog.Actions>
            </Dialog>
            <Input
              style={styles.textInput}
              placeholder="Item"
              onChangeText={handleTitleInput}
              value={enteredItem}
            />
            <Input
              style={styles.textInput}
              placeholder="Price"
              keyboardType="number-pad"
              onChangeText={handlePriceInput}
              value={enteredPrice}
            />
            <Pressable onPress={toggleDialog} style={styles.secondaryButton}>
              <Text style={styles.buttonText}>Set Category</Text>
            </Pressable>
          </View>
          <View style={styles.buttonContainer}>
          <Pressable onPress={addTransactionItemHandler} style={styles.primaryButton}>
            <Text style={styles.buttonText}> Add Transaction </Text>
          </Pressable>
          <Pressable onPress={addTransactionHandler} style={styles.primaryButton}>
            <Text style={styles.buttonText}> Done </Text>
          </Pressable>
          </View>
        </View>
      </ImageBackground>
    </Modal>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: "flex-start",
  },
  backgroundImage: {
    opacity: 0.55,
  },
  closeIcon: {
    // flex:1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 15,
    marginVertical: 10,
  },
  textInput: {
    padding: 5,
    // backgroundColor: "#f7f2f3",
  },
  modal: {
    marginVertical: 50,
    marginHorizontal: 50,
    height: 400,
    width: 200,
  },
  outerContainer: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 15,

  },
  inputContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
    width: 300,
    padding: 15,
    backgroundColor: 'white',
    opacity: 0.7,
    borderRadius: 10,
    elevation: 20,
    borderWidth: 0.5,
    borderColor: 'black', 
    elevation: 10,
  },
  dialogButtonContainer: {
    flexDirection: "row",
  },
  title: {
    fontSize: 36,
    color: "#0d0f8c",
    marginLeft: 10,
    marginBottom: 10,
  },
  primaryButton: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 10,
    backgroundColor: '#5372cf',
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    elevation: 10,
  },
  secondaryButton: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#de687a',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 0.5,
    borderColor: 'black',
    alignItems: "center",
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "400",
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",    
  }
});

export default AddTransaction;
