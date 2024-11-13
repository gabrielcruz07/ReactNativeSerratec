import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#FAFAFA",
    paddingTop: 10,
    paddingHorizontal: screenWidth * 0.1,
    shadowColor: "#212121",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    height: 60,
  },
  casa: {
    borderRadius: 10,
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  viewFooter: {
    alignItems: "center",
  },
  imageExtratoFooter: {
    borderRadius: 8,
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  imagesFooter: {
    borderRadius: 15,
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  textFooter: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#212121",
    textAlign: "center",
  },
});
