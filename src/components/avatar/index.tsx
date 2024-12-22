import { Image, ImageProps, View, Text } from "react-native";
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
      fontSize: 32,
    },
  },
};

type Props = {
  name: string;
  image?: ImageProps | null;
  variant?: "medium" | "large";
};

export function Avatar({ name, image, variant = "medium" }: Props) {
  return (
    <View>
      {image ? (
        <Image source={image} style={variants.image[variant]} />
      ) : (
        <View style={styles.letter}>
          <Text style={[styles.text, variants.text[variant]]}>
            {name[0].toUpperCase()}
          </Text>
        </View>
      )}
    </View>
  );
}
