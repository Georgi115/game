import { createSlice } from "@reduxjs/toolkit";
import coinYellow from "../img/coin/coinYellow.png";
import coinRed from "../img/coin/coinRed.png";
import coinBlue from "../img/coin/coinBlue.png";

const rouletteSlice = createSlice({
  name: "rouletteSlice",

  initialState: {
    coins: [
      { img: coinYellow, id: 0 },
      { img: coinRed, id: 1 },
      { img: coinRed, id: 1 },
      { img: coinRed, id: 1 },
      { img: coinRed, id: 1 },
      { img: coinRed, id: 1 },
      { img: coinBlue, id: 2 },
      { img: coinBlue, id: 2 },
      { img: coinBlue, id: 2 },
      { img: coinBlue, id: 2 },
      { img: coinBlue, id: 2 },
    ],
    clickRoulete: false,
    backRoulete: false,
    roulete: false,
    winnerCoin: [],
    counter: 0,
  },
  reducers: {
    changeRoulette(state, action) {
      state.clickRoulete = true;
      state.backRoulete = false;
      state.counter = state.counter + 1;
    },
    changeWinnerCoin(state, action) {
      if (state.counter === 0) return;

      state.winnerCoin.unshift(action.payload);
    },
    changeBackRoulete(state) {
      state.backRoulete = true;
      state.clickRoulete = false;
    },
  },
});

export default rouletteSlice.reducer;
export const { changeRoulette, changeWinnerCoin, changeBackRoulete } =
  rouletteSlice.actions;
