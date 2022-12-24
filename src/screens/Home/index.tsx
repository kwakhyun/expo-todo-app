import { useMemo, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Empty } from "../../components/Empty";
import { Todo } from "../../components/Todo";
import { TodoInfo } from "../../components/TodoInfo";

import { styles } from "./styles";

interface Todo {
  description: string;
  completed: boolean;
}

export function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const todoCount = useMemo(() => {
    return todos.length;
  }, [todos]);

  const completedCount = useMemo(() => {
    return todos.reduce((acc, todo) => {
      if (todo.completed === true) {
        acc += 1;
      }
      return acc;
    }, 0);
  }, [todos]);

  function handleAddTodo() {
    if (newTodo === "") {
      return Alert.alert(
        "할 일을 입력해주세요!",
        "내용을 입력하지 않았습니다."
      );
    }

    const todosDescription = todos.map((todo) => todo.description);

    if (todosDescription.includes(newTodo)) {
      return Alert.alert(
        "이미 등록된 할 일입니다!",
        "중복된 할 일은 등록할 수 없습니다."
      );
    }

    setTodos((prevState) => {
      return [
        ...prevState,
        {
          description: newTodo,
          completed: false
        }
      ];
    });
    setNewTodo("");
  }

  function handleCheckTodo(description: string) {
    const updateTodo = todos.map((todo) => {
      if (todo.description === description) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updateTodo);
  }

  function handleRemoveTodo(description: string) {
    Alert.alert("할 일 삭제", `할 일을 삭제할까요?`, [
      {
        text: "확인",
        onPress: () => {
          setTodos((prevState) =>
            prevState.filter((task) => task.description !== description)
          );
        }
      },
      {
        text: "취소",
        style: "cancel"
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.newTodoInput}
          placeholder="할 일을 입력하세요."
          placeholderTextColor="#808080"
          value={newTodo}
          onChangeText={setNewTodo}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
          <AntDesign name="pluscircleo" size={20} color="#F2F2F2" />
        </TouchableOpacity>
      </View>

      <View style={styles.todosContainer}>
        <TodoInfo todoCount={todoCount} completedCount={completedCount} />

        <FlatList
          data={todos}
          keyExtractor={(item) => item.description}
          renderItem={({ item }) => (
            <Todo
              description={item.description}
              finished={item.completed}
              onFinish={handleCheckTodo}
              onRemove={handleRemoveTodo}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<Empty />}
        />
      </View>
    </View>
  );
}
