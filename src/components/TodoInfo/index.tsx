import { Text, View } from "react-native";

import { styles } from "./styles";

interface TodoInfoProps {
  todoCount: number;
  completedCount: number;
}

export function TodoInfo({ todoCount, completedCount }: TodoInfoProps) {
  return (
    <View style={styles.todosInfo}>
      <View style={styles.todosCounter}>
        <Text style={styles.createdTodos}>To do</Text>
        <Text style={styles.count}> {todoCount} </Text>
      </View>

      <View style={styles.todosCounter}>
        <Text style={styles.completedTodos}>Completed</Text>
        <Text style={styles.count}> {completedCount} </Text>
      </View>
    </View>
  );
}
