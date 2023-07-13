import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";

export const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  titleText: {
    fontSize: 28,

    color: COLORS.white,
    fontFamily: "dancing-bold",
  },
});
