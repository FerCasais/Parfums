import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  listContainer: {
    flex: 1,
  },
  cartResume: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,

    borderRadius: 10,
    width: "90%",
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: 10,
    backgroundColor: COLORS.background2,
  },
  orderButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: 20,

    borderRadius: 30,
    marginTop: 20,
  },
  orderButtonText: {
    color: COLORS.black,
    fontFamily: "castaro",
  
 
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartText: {
    color: COLORS.secodary,
    fontFamily: "castaro",
    fontSize: 20,
    backgroundColor: COLORS.background2,
    padding: 20,
    borderRadius: 5,

  },
  orderTouch: {
   
  }
 


});
