import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../avatar";

export function Contact() {
  return (
    <TouchableOpacity>
      <Avatar name="Claudio" image={require("@/assets/profile.jpeg")} />
      <Text style={styles.name}>Claudio</Text>
    </TouchableOpacity>
  );
}
