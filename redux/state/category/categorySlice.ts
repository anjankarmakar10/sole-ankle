import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CategoryState {
  value: string;
}

const initialState: CategoryState = {
  value: "all shoes",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      if (action.payload !== state.value) {
        state.value = action.payload;
      }
    },
  },
});
export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
