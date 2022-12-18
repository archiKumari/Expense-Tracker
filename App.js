import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StartScreen from "./src/StartScreen";
import AllTransactions from "./src/AllTransactions"
import AddTransaction from "./src/AddTransaction";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="AllTransactions" component={AllTransactions} />
        <Stack.Screen name="AddTransaction" component={AddTransaction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  text : {
    color: 'black',
    fontSize: 32,
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.65,
  },
});

