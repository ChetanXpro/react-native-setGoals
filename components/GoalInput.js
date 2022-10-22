import {
  Button,
  StyleSheet,
  TextInput,
  Modal,
  View,
  Image,
} from "react-native";

export const GoalInput = ({
  setIsModalVisible,
  setGoalText,
  setGoals,
  isModalVisible,
  goalText,
}) => {
  const inputhandle = (text) => {
    setGoalText(text);
  };

  const addGoal = () => {
    setGoals((currGoal) => [
      ...currGoal,
      { text: goalText, id: Math.random().toString() },
    ]);
    setGoalText("");
    setIsModalVisible(false);
  };

  return (
    <Modal
      style={{ margin: 55, padding: 33 }}
      backdropColor={"red"}
      visible={isModalVisible}
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          onChangeText={inputhandle}
          style={styles.textInput}
          value={goalText}
          placeholder="Your goals!"
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addGoal} color="#5e0acc" title="Add goal" />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => setIsModalVisible(false)}
              color="#f31282"
              title="Cancel"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
  },
  button: {
    width: "40%",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "70%",

    marginTop: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputContainer: {
    flex: 1,

    flexDirection: "column",
    justifyContent: "center",

    alignItems: "center",
    padding: 16,

    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 2,
    marginTop: 30,
    color: "#120438",
    fontSize: 17,
    fontWeight: "600",
    borderRadius: 7,
    padding: 16,
    borderColor: "#efd0ff",
    backgroundColor: "#efd0ff",

    width: "100%",

    padding: 8,
  },
});
