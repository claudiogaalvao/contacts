import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    letter: {
        backgroundColor: theme.colors.white,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontFamily: theme.fontFamily.medium,
        textAlign: "center"
    }
})