import { theme } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.gray_100,
        height: 54,
        borderRadius: 18,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        gap: 8
    },
    input: {
        flex: 1,
        color: theme.colors.black,
        fontSize: 16,
        fontFamily: theme.fontFamily.regular
    }
})