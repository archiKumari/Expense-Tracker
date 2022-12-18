//View for diplaying application header
import { View, Text, StyleSheet } from "react-native";

function Header(props) {
    const budget = 30000;
    const expense = props.addExpense;
    const balance = budget-expense;  
    return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.tab}>
          <Text style={styles.title}>Budget</Text>
          <Text style={styles.amount}>{"₹ "+budget}</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.title}>Expense</Text>
          <Text style={styles.amount}> {"₹ "+expense}</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.title}>Balance</Text>
          <Text style={styles.amount}>{"₹ "+balance}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  innerContainer: {
    flexDirection: "row",
    elevation: 10,
  },
  tab: {
    flex:1,
    padding: 3,
    alignItems: "center",
    borderRightColor: 'white',
    borderRightWidth: 0.5,
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
  },
  title: {
    fontSize: 25,
    color: 'white',
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 2,
  },
  amount: {
    fontSize: 20,
    color: 'white',
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 2,
  }

});

export default Header;
