import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  text: {
    fontSize: 22,
    color: COLORS.black,
    fontWeight: "bold",
  },
  tinyLogo: {
    width: 200,
    height: 200,
   justifyContent: "center",
   alignItems: "center",
  },
  description: {
   
    fontSize: 14,
  },
  tagTitle: {

    fontSize: 16,
  },
  price: {
  
    fontSize: 20,
  },

    containerImage: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 20,
  
  },
  image: {
 
    width: 400,
    height: 250,

  
  },
  image2: {
    width:400,
    height: 200,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",

    padding: 20,
    gap: 10,
  },
  name: {
 
    fontSize: 18,
  },
});
