import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: COLORS.secodary,
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
  
  },
  text: {
    color: COLORS.white,
    fontFamily: "castaro",
  },
  buttonAvatar: {

    backgroundColor: COLORS.secodary,
  
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
   
    marginLeft: 100,
    marginRight: 150,
    marginBottom: 25,
  
    
  },
  tinyLogo: {
    width: 50,
    height: 50,
   borderRadius: 50,
  },
  avatarContainer: {
    flexDirection: 'row',
    gap: 20,

  },
    loading: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 130,
  },
});
