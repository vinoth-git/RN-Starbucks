import React, { useEffect, useRef } from "react";
import { Text, View, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import ChatMessageBox from "../components/Chat/ChatMessage";
import { chatStyles } from "../styles/chatStyles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { getChatResult, setChatList } from "../redux/reducers/chatReducer";

export default function ChatScreen() {
  const [inputText, setInputText] = React.useState("");
  const dispatch = useDispatch();
  const scrollViewRef = useRef();
  const chatReducer = useSelector((state) => state.chatReducer);
  let chatList = (chatReducer && chatReducer.chatList) || [];
  let relatedQuestions = (chatReducer && chatReducer.relatedQuestions) || [];
  let isChatLoading = Boolean(chatReducer && chatReducer.isChatLoading);

  useEffect(() => {
    dispatch(
      getChatResult({
        query: "starbucks",
      })
    );
  }, []);

  function onChatClick(text = "") {
    let value = text ? text : inputText;
    if (value && !isChatLoading && value.trim().length) {
      dispatch(
        setChatList([...chatList, { isFromUser: true, question: value }])
      );
      dispatch(
        getChatResult({
          query: value,
        })
      );
      setInputText("");
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() => {
          if (scrollViewRef)
            scrollViewRef.current.scrollToEnd({ animated: true });
        }}
      >
        <View style={chatStyles.root}>
          {relatedQuestions && relatedQuestions.length ? (
            relatedQuestions.slice(0, 4).map((c, i) => (
              <Text
                key={i}
                onPress={() => onChatClick(c)}
                style={chatStyles.relatedQues}
              >
                {c}
              </Text>
            ))
          ) : (
            <Text>{""}</Text>
          )}
          <ChatMessageBox />
        </View>
      </ScrollView>
      {isChatLoading ? (
        <Text style={chatStyles.typing}>Startbucks is typing....</Text>
      ) : (
        <Text>{""}</Text>
      )}
      <View style={chatStyles.inputContainer}>
        <TextInput
          value={inputText}
          style={chatStyles.inputBox}
          placeholder="Have Questions?"
          onChangeText={setInputText}
          onSubmitEditing={() => onChatClick("")}
        />
        <Ionicons
          onPress={() => onChatClick("")}
          size={40}
          color={"#1e3932"}
          name="chevron-forward-circle-sharp"
        />
      </View>
    </View>
  );
}
