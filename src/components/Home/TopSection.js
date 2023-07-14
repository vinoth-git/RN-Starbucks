import React from "react";
import { Image } from "react-native";
import { Text, View } from "react-native";
import { HomeStyles } from "../../styles/HomeStyles";

export default function TopHomeSection() {
  let arr = [
    {
      label: "Bestseller",
      image: require("../../images/bestseller.png"),
    },
    {
      label: "Drinks",
      image: require("../../images/cofee.png"),
    },
    {
      label: "Food",
      image: require("../../images/food.png"),
    },
    {
      label: "Coffee At Home",
      image: require("../../images/coffee2.png"),
    },
    {
      label: "Merchandise",
      image: require("../../images/package.png"),
    },
    {
      label: "Ready to Eat",
      image: require("../../images/readytoeat.png"),
    },
  ];
  return (
    <View style={HomeStyles.gridSection}>
      {arr.map((c, i) => (
        <View style={HomeStyles.imageContainer} key={c.label + i}>
          <Image style={HomeStyles.image} source={c.image} />
          <Text style={HomeStyles.imaeText}>{c.label}</Text>
        </View>
      ))}
    </View>
  );
}
