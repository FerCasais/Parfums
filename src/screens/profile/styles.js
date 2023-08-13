import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 145,
    flexDirection: 'row',
    backgroundColor: COLORS.background2,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 15,
    marginHorizontal: 15,
    marginTop: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    color: COLORS.secodary,
    fontFamily: "castaro",
  fontSize: 12,
    textAlign: "center",
   
   

  },
  text1: {
    color: COLORS.secodary,
    fontFamily: "castaro",
    marginBottom: 2,
    textAlign: "center",
    marginTop: 10,
    fontSize: 10,
  
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
    paddingVertical: 100,
  
  },
  input: {
    height: 45,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    width: '90%',
  
    marginBottom: 5,
  },
  flatlist: {
    height: '100%',
  },
  image: {
    width: 100,
    height: 100,
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 20,
    borderRadius: 50,
  },
  contentProfile: {
    flexDirection: "column",
  }

});
