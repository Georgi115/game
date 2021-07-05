import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    inputField: "",
    count: 0,
    messages: [
      {
        name: "Бродяга",
        text: "панимаю помойка просто нажал а оно выводилось и я слил",
        time: "21:33",
      },
      {
        name: "Serega#RUSTRUN",
        text: "не поставилось",
        time: "21:33",
      },
      {
        name: "EpifanecVelikiy",
        text: "А че бабулех предатель, на фейле играет?",
        time: "21:32",
      },
      {
        name: "Артемий Темкин",
        text: "mafia,мне тебя жаль",
        time: "21:32",
      },
      {
        name: "Serega#RUSTRUN",
        text: "не поставилось",
        time: "21:33",
      },
      {
        name: "EpifanecVelikiy",
        text: "А че бабулех предатель, на фейле играет?",
        time: "21:32",
      },
      {
        name: "Mурлок3153",
        text: "mafia,мне тебя жаль",
        time: "21:32",
      },
      {
        name: "Mурлок3153",
        text: "mafia,мне тебя жаль",
        time: "21:32",
      },
      {
        name: "Mурлок3153",
        text: "mafia,мне тебя жаль",
        time: "21:32",
      },
    ],
  },
  reducers: {
    changeInputField(state, action) {
      state.inputField = action.payload;
    },
    sendMessage(state) {
      if (state.inputField.trim() === "" || state.count > 0) return;
      const date = new Date();
      state.messages.push({
        name: "Неизвестно",
        text: state.inputField,
        time: `${date.getHours()}:${date.getMinutes()}`,
      });
      state.count = 30;
      state.inputField = "";
    },
    changeCount(state) {
      state.count = state.count - 1;
    },
  },
});

export default chatSlice.reducer;
export const { changeInputField, sendMessage, changeCount } = chatSlice.actions;
