import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
  root: {
    marginHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 600,
    marginVertical: 16,
  },
  gridSection: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imageContainer: { marginVertical: 8 },
  imaeText: {
    textAlign: "center",
    marginVertical: 8,
    fontWeight: 500,
  },
  image: {
    width: 100,
    height: 100,
    objectFit: "cover",
    borderRadius: 50,
  },
  sliderImage: {
    width: 110,
    height: 110,
    borderRadius: 16,
  },
  sliderRoot: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderColor: "#e1e0e0",
    borderWidth: 1,
  },
  sliderContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  button: {
    backgroundColor: "#00754a",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  buttonText: {
    fontWeight: 500,
    color: "#fff",
  },
  boldText: {
    fontSize: 18,
    fontWeight: 500,
  },
  sliderTitle: {
    marginLeft: 16
  },
});
