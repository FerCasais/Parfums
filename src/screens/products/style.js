import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  text: {
    fontSize: 22,
    color: COLORS.black,
    fontWeight: "bold",
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
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 15,
  },
  image: {
    width: 400,
    height: 250,
  },
  image2: {
    width: "100%",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 18,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cardCover: {
    flexDirection: "row",
    paddingBottom: 10,
  },
  cardView: {
    width: 280,
  },
  touchable: {
    marginBottom: 10,
    paddingBottom: 120,
  },
});
