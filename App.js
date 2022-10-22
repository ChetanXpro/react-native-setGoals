import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import { StyleSheet, View, FlatList, Button, Text } from "react-native";
import { GoalInput } from "./components/GoalInput";

import GoalItem from "./components/GoalItem";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goalText, setGoalText] = useState("");
  const [goals, setGoals] = useState([]);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          onPress={() => setIsModalVisible(!isModalVisible)}
          title="Add new Goal"
          color="#5e0acc"
        />

        <GoalInput
          goalText={goalText}
          setGoals={setGoals}
          setGoalText={setGoalText}
          setIsModalVisible={setIsModalVisible}
          isModalVisible={isModalVisible}
        />

        <View style={styles.goalContainer}>
          {goals.length !== 0 ? (
            <FlatList
              data={goals}
              renderItem={(goal) => {
                return <GoalItem setGoals={setGoals} goal={goal} />;
              }}
              keyExtractor={(item, index) => item.id}
            ></FlatList>
          ) : (
            <Text
              style={{ color: "#efd0ff", fontSize: 26, fontWeight: "bold" }}
            >
              No Goals..
            </Text>
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    height: "100%",

    justifyContent: "center",
    alignItems: "center",
  },
  appContainer: {
    paddingTop: 60,
    paddingHorizontal: 16,
    // backgroundColor: "#1e085a",
    height: "100%",
  },
});
