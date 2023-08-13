import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";

export const styles= StyleSheet.create({
    container : {
        flex : 1,
       
    },
    orderListText: {
        fontFamily: 'castaro'

    },
    goToMessageContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    textButton: {
        fontFamily: 'castaro',
        fontSize: 16,
        marginTop: 15,
        backgroundColor: COLORS.primary, 
        color: COLORS.white,
        padding: 10,
        borderRadius: 10,   
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 6,
    },
}); 

