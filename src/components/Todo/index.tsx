import { TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

interface TodoProps {
  description: string;
  finished: boolean;
  onFinish: (description: string) => void;
  onRemove: (description: string) => void;
}

export function Todo({ description, finished, onFinish, onRemove }: TodoProps) {
  return (
    <View style={styles.container}>
      <View style={styles.todoContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#5E60CE"
          unfillColor="transparent"
          innerIconStyle={{
            borderColor: `${finished ? "#5E60CE" : "#4EA8DE"}`
          }}
          text={description}
          textStyle={{
            color: `${finished ? "#808080" : "#F2F2F2"}`
          }}
          isChecked={finished}
          onPress={() => {
            onFinish(description);
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.deleteTodoContainer}
        onPress={() => onRemove(description)}
      >
        <Feather name="trash-2" size={20} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
