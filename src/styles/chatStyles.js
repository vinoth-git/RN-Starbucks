import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

export const chatStyles = StyleSheet.create({
  root: {
    marginHorizontal: 10,
    display: "flex",
  },
  chatMessageBox: {
    display: "flex",
    flexDirection: "row",
    maxWidth: Dimensions.get("window").width - 100,
    marginVertical: 10,
  },
  chatMessageTextClient: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 500,
    backgroundColor: "#1e3932",
    padding: 10,
    marginHorizontal: 5,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  chatMessageTextUser: {
    color: "#fff",
    maxWidth: Dimensions.get("window").width - 150,
    fontSize: 16,
    fontWeight: 500,
    backgroundColor: "#000",
    padding: 10,
    marginHorizontal: 5,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  inputBox: {
    marginRight: 10,
    flex: 1,
    borderColor: "#fff",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  typing: {
    color: "#000",
    fontSize: 16,
    fontWeight: 500,
    marginVertical: 8,
  },
  relatedQues: {
    marginVertical: 10,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
  }
});
