import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../../utils/request";

export const getChatResult = createAsyncThunk(
  "chatReducer/getChatResult",
  async (data, { dispatch, getState }) => {
    try {
      dispatch(setIsLoading(true));
      let URL = `/api/answer?engineId=3&threshold=0.5&maxAnswerListCount=${
        (data && data.maxAnswerListCount) || 1
      }&`;
      if (data && data.query) {
        URL += `query=${data.query}`;
      }

      const result = await request({
        url: URL,
        method: "GET",
      });
      let state = getState().chatReducer;
      let chatList = state.chatList || [];
      if (result && result.relatedQuestions && result.relatedQuestions.length) {
        dispatch(setRelatedQuestions(result.relatedQuestions));
      }
      dispatch(
        setChatList([
          ...chatList,
          { isFromUser: false, answer: (result && result.topAnswer) || "" },
        ])
      );
      dispatch(setIsLoading(false));
    } catch (err) {
      dispatch(setIsLoading(false));
      console.log(err);
    }
  }
);

const initialState = {
  chatList: [],
  relatedQuestions: [],
  isChatLoading: false,
};
export const chat = createSlice({
  name: "chatReducer",
  initialState: initialState,
  reducers: {
    setChatList: (state, action) => {
      state.chatList = action.payload;
    },
    setRelatedQuestions: (state, action) => {
      state.relatedQuestions = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isChatLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setChatList, setRelatedQuestions, setIsLoading } = chat.actions;

export default chat.reducer;
