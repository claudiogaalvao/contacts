import { theme } from "@/theme";
import { fontFamily } from "@/theme/font-family";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 8,
        gap: 12
    },
    name: {
        color: theme.colors.black,
        fontFamily: theme.fontFamily.medium,
        fontSize: 18
    }
})