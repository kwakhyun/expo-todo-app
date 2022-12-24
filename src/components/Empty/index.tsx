import { Image, Text, View } from "react-native";

import { styles } from "./styles";

export function Empty() {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/empty-list-icon.png")} />

      <Text style={styles.title}>등록된 할 일이 없습니다.</Text>
      <Text style={styles.subTitle}>
        할 일을 등록하고, 완료한 할 일을 체크해보세요.
      </Text>
    </View>
  );
}

