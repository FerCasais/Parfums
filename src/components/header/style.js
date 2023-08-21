import { StyleSheet, StatusBar } from "react-native";
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
  tabletContainer: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.primary,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  tabletTitle: {
    fontSize: 35,
   
   
  },
});
