import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  todosInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  todosCounter: {
    flexDirection: "row"
  },
  createdTodos: {
    color: "#4EA8DE",
    fontWeight: "bold"
  },
  completedTodos: {
    color: "#8284FA",
    fontWeight: "bold"
  },
  count: {
    marginLeft: 5,
    color: "#D9D9D9",
    backgroundColor: "#454545",
    borderRadius: 9999,
    paddingLeft: 5,
    paddingRight: 5
  }
});
