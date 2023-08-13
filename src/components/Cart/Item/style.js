import { StyleSheet } from "react-native";
import { COLORS } from "../../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 145,
    backgroundColor: COLORS.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 10,
    marginHorizontal: 15,
    marginTop: 15,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 5,
  },
  imageContainer: {
    maxWidth: 120,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  detailContainer: {
    justifyContent: "space-between",
    maxWidth: 190,
    gap: 4,
  },
  name: {
    fontSize: 18,
    fontFamily: "castaro",
  },
  price: {
    fontSize: 13,
    fontFamily: "castaro",
  },
  qty: {
    fontSize: 13,
    fontFamily: "castaro",
  },
  stock: {
    fontSize: 13,
    fontFamily: "castaro",
  },
  actionContainer: {
    gap: 25,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  increaseButton: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
    borderRadius: 20,
  },
  increaseButtonText: {
    fontSize: 14,
  },
  decreaseButton: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
    borderRadius: 20,
  },
  decreaseButtonText: {
    fontSize: 14,
  },
  deleteButton: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background2,

    borderRadius: 20,
  },
  deleteContainer: {},
});
