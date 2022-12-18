import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { useEffect } from "react";
import {StatusBar} from "expo-status-bar";

function StartScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("AllTransactions");
    }, 3000);
  }, []);

  return (
    <ImageBackground
      source={require("../assets/Images/background.jpg")}
      style={styles.rootScreen}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}
    >
      <StatusBar style="auto" />
        <View style={styles.container}>
          <Text style={styles.title}>Expense Tracker Application</Text>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    alignItems: "center",
  },
  backgroundImage: {
    opacity: 0.55,
  },
  container: {
    paddingLeft: 20,
    paddingBottom: 20,
    justifyContent: "center", 
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    color: "white",
    marginTop: 140,
    elevation: 15,
  },
});

export default StartScreen;
