import React from "react";
import { ScrollView } from "react-native";
import { Text, View } from "react-native";
import SliderSection from "../components/Home/Slider";
import TopHomeSection from "../components/Home/TopSection";
import { HomeStyles } from "../styles/HomeStyles";

export default function HomeScreen() {
  return (
    <View>
      <ScrollView>
        <View style={HomeStyles.root}>
          <Text style={HomeStyles.header}>Handcrafted Curations</Text>
          <TopHomeSection />
          <Text style={HomeStyles.header}>Barista Recommends</Text>
          <SliderSection />
        </View>
      </ScrollView>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
