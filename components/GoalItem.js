import { StyleSheet, Text, Pressable, View } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const GoalItem = ({ goal, setGoals }) => {
  const dlt = (id) => {
    setGoals((currGoal) => {
      return currGoal.filter((goal) => goal.id !== id);
    });
  };

  const helpDelete = () => {
    dlt(goal.item.id);
  };
  return (
    <View style={styles.goalList}>
      <View style={styles.SingleList}>
        <Text style={styles.text}>{goal.item.text}</Text>
        <Pressable
          android_ripple={{ color: "grey", borderless: true }}
          onPress={helpDelete}
        >
          <Icon style={styles.dltIcon} name="trash" size={30} color="red" />
        </Pressable>
      </View>
    </View>
  );
};

export default GoalItem;
const styles = StyleSheet.create({
  dltIcon: {
    marginRight: 3,
  },
  text: {
    color: "white",
    color: "white",
    fontSize: 17,
    marginLeft: 3,
    width: "80%",
  },
  goalList: {
    marginTop: 10,

    flex: 4,
    marginBottom: 10,

    alignItems: "center",
  },
  SingleList: {
    marginTop: 5,
    padding: 10,

    backgroundColor: "#5e0acc",
    width: "90%",
    borderRadius: 7,
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
