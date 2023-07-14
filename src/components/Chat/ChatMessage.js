import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { chatStyles } from "../../styles/chatStyles";

export default function ChatMessageBox() {
  const chatReducer = useSelector((state) => state.chatReducer);
  let chatList = (chatReducer && chatReducer.chatList) || [];
  return (
    <View>
      {chatList && chatList.length ? (
        chatList.map((c, i) => {
          if (c.isFromUser) {
            return (
              <View
                key={i}
                style={{ ...chatStyles.chatMessageBox, marginLeft: "auto" }}
              >
                <Text style={chatStyles.chatMessageTextUser}>
                  {c.question || ""}
                </Text>
                <Image
                  style={chatStyles.logo}
                  source={require("../../images/user.png")}
                />
              </View>
            );
          } else {
            return (
              <View key={i} style={chatStyles.chatMessageBox}>
                <Image
                  style={chatStyles.logo}
                  source={require("../../images/logo.png")}
                />
                <Text style={chatStyles.chatMessageTextClient}>
                  {c.answer || ""}
                </Text>
              </View>
            );
          }
        })
      ) : (
        <Text>{""}</Text>
      )}
    </View>
  );
}
