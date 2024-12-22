import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { Input } from "@/components/input";
import { theme } from "@/theme";
import { useState } from "react";
import { Contact } from "@/components/contact";

export function Home() {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Input style={styles.input}>
          <Feather name="search" size={16} color={theme.colors.gray_300} />
          <Input.Field
            placeholder="Pesquisar pelo nome..."
            onChangeText={setName}
            value={name}
          />
          <TouchableOpacity onPress={() => setName("")}>
            <Feather name="x" size={16} color={theme.colors.gray_300} />
          </TouchableOpacity>
        </Input>
      </View>
      <Contact />
    </View>
  );
}
