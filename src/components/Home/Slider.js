import React from "react";
import { Dimensions, Image, Pressable } from "react-native";
import { Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { HomeStyles } from "../../styles/HomeStyles";

export default function SliderSection() {
  let arr = [
    {
      isVeg: true,
      image: require("../../images/bestseller.png"),
      name: "Java Chip Frappuccino",
      quantity: "TALL(354 ML) 392 kcal",
      price: "₹ 351.75",
    },
    {
      isVeg: true,
      image: require("../../images/cofee.png"),
      name: "Cold coffee",
      quantity: "TALL(354 ML) 392 kcal",
      price: "₹ 451.75",
    },
    {
      isVeg: true,
      image: require("../../images/readytoeat.png"),
      name: "Dark Chocolate",
      quantity: "TALL(354 ML) 392 kcal",
      price: "₹ 499.99",
    },
  ];

  function renderItem({ item, index }) {
    return (
        <View style={HomeStyles.sliderRoot}>
          <View style={HomeStyles.sliderContent}>
            <Image style={HomeStyles.sliderImage} source={item.image} />
            <View style={HomeStyles.sliderTitle}>
              <Text style={HomeStyles.boldText}>{item.name}</Text>
              <Text>{item.quantity}</Text>
            </View>
          </View>
          <View
            style={{
              ...HomeStyles.sliderContent,
              justifyContent: "space-between",
            }}
          >
            <Text style={HomeStyles.boldText}>{item.price}</Text>
            <Pressable style={HomeStyles.button} onPress={() => {}}>
              <Text style={HomeStyles.buttonText}>Add Item</Text>
            </Pressable>
          </View>
        </View>
    );
  }

  return (
    <Carousel
      layout="default"
      data={arr}
      renderItem={renderItem}
      sliderWidth={Dimensions.get('window').width - 30}
      itemWidth={Dimensions.get('window').width - 30}
    />
  );
}
