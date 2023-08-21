import { StyleSheet } from "react-native";
import { COLORS } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
 flex: 1,

    },
    imageBackground: {
      width: '100%',
      height: 300,
    },
    categoryName: {
      color: COLORS.secodary,
      fontSize: 25,
      textAlign: 'center',
      fontFamily: 'castaro',
      backgroundColor: COLORS.background2,
    },
    imageBackgroundTablet: {
      width: '100%',
      height: 250,
      justifyContent: 'flex-end',
    },
    categoryNameTablet: {
      fontSize: 35,
      padding: 20,
      textShadowColor: 'rgba(0,0, 0, 0.75)'
    }
});