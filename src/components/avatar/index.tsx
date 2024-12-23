import {
  Image,
  ImageProps,
  View,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";
import { styles } from "./styles";
import { fontFamily } from "@/theme/font-family";

const variants = {
  image: {
    medium: {
      width: 54,
      height: 54,
      borderRadius: 18,
    },
    large: {
      width: 100,
      height: 100,
      borderRadius: 32,
    },
  },
  text: {
    medium: {
      fontSize: 24,
    },
    large: {
      fontSize: 52,
    },
  },
};

type Props = {
  name: string;
  image?: ImageProps | null;
  variant?: "medium" | "large";
  containerStyle?: StyleProp<ViewStyle>;
};

export function Avatar({
  name,
  image,
  variant = "medium",
  containerStyle,
}: Props) {
  return (
    <View style={containerStyle}>
      {image ? (
        <Image source={image} style={variants.image[variant]} />
      ) : (
        <View style={[styles.letter, variants.image[variant]]}>
          <Text style={[styles.text, variants.text[variant]]}>
            {name[0].toUpperCase()}
          </Text>
        </View>
      )}
    </View>
  );
}
