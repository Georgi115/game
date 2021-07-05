import { createSlice } from "@reduxjs/toolkit";
import snap from "../img/inventory/snap.png";
import gunn from "../img/inventory/gunn.png";
import def from "../img/inventory/default.png";
import jeans from "../img/inventory/Jeans.png";

const repositorySlice = createSlice({
  name: "rouletteSlice",
  initialState: {
    inventory: [
      {
        img: snap,
        price: "124.42",
        name: "Snap Turtlle",
        active: false,
        color: "#ffba43",
      },
      {
        img: jeans,
        price: "35.18",
        name: "Blue Jeans",
        active: false,
        color: "#66ff66",
      },
      {
        img: gunn,
        price: "5.75",
        name: "First Aid Green",
        active: false,
        color: "#3289ff",
      },
      {
        img: def,
        price: "18.20",
        name: "Blue Jeans",
        active: false,
        color: "#606581",
      },
      {
        img: def,
        price: "0.73",
        name: "Blue Jeans",
        active: false,
        color: "#606581",
      },
      {
        img: def,
        price: "1.26",
        name: "Blue Jeans",
        active: false,
        color: "#606581",
      },
      {
        img: jeans,
        price: "124.42",
        name: "Snap Turtlle",
        active: false,
        color: "#ffba43",
      },
      {
        img: snap,
        price: "35.18",
        name: "Blue Jeans",
        active: false,
        color: "#66ff66",
      },
      {
        img: gunn,
        price: "5.75",
        name: "First Aid Green",
        active: false,
        color: "#3289ff",
      },
      {
        img: def,
        price: "18.20",
        name: "Blue Jeans",
        active: false,
        color: "#606581",
      },
      {
        img: def,
        price: "0.73",
        name: "Blue Jeans",
        active: false,
        color: "#606581",
      },
      {
        img: def,
        price: "1.26",
        name: "Blue Jeans",
        active: false,
        color: "#606581",
      },
    ],
    copyArray: null,
    choicePrice: 0,
    filter: "quality",
  },
  reducers: {
    changeInventory(state, action) {
      state.inventory[action.payload].active =
        !state.inventory[action.payload].active;
      const arr = state.inventory.filter((el) => el.active);
      const result = arr.reduce((acc, el) => {
        return (acc += +el.price);
      }, 0);
      state.choicePrice = result.toFixed(2);
    },

    changeFilter(state, action) {
      state.filter = action.payload;

      if (action.payload === "price") {
        state.copyArray = [...state.inventory];
        state.inventory = state.inventory.sort((a, b) =>
          Math.floor(a.price) > Math.floor(b.price) ? 1 : -1
        );
      } else {
        state.inventory = [...state.copyArray];
      }
    },
  },
});

export default repositorySlice.reducer;
export const { changeInventory, changeFilter } = repositorySlice.actions;
