import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data";

export const elementSlice = createSlice({
  name: "element",
  initialState: {
    value: 100000000000,
    initialMoney: 100000000000,
    items: [...data],
  },
  reducers: {
    product: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.items.find(item => item.id === id);
      product.quantity = quantity;
      let total = 0;
      state.items.map(
        item => (total += Number(item.price) * Number(item.quantity))
      );
      state.value = state.initialMoney - total;
    },
  },
});

export const { product } = elementSlice.actions;
export default elementSlice.reducer;
