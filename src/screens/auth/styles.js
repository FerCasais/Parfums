import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.background,
  },
  content: {
    width: "80%",
    maxWidth: 400,
    padding: 15,
    margin: 15,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 5,
  },
  header: {
    fontSize: 16,
    textAlign: "center",
    color: COLORS.text,
    paddingVertical: 10,
  },
  label: {
    fontSize: 14,
    color: COLORS.text,
  },
  input: {
    height: 45,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    width: "90%",

    marginBottom: 5,
  },
  linkContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  link: {},
  linkText: {
    fontSize: 14,
    textAlign: "center",
    color: COLORS.primary,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  button: {
    backgroundColor: COLORS.background,
    width: 200,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: "castaro",
    fontSize: 14,
    textAlign: "center",
    color: COLORS.secodary,
  },
  text: {
    color: COLORS.secodary,
    fontFamily: "castaro",
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  avatarContainer: {
    flexDirection: "row",
    gap: 20,
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingVertical: 30,
    fontFamily: "castaro",
    fontSize: 25,
    color: COLORS.secodary,
  },
  input: {
    height: 45,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    width: "90%",
    marginBottom: 5,
  },
});
