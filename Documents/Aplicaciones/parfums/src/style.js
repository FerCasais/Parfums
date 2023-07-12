import { StyleSheet, StatusBar } from "react-native";
import { COLORS } from "./utils/colors";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        marginTop: StatusBar.currentHeight,

    },
    
    splashFonts: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activityIndicator: {

        color: COLORS.primary,
        size: 'large',

        

        
    }
    






}); 