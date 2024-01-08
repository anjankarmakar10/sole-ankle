import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface FiltersState {
  category: string;
  price?: string;
}
const initialState: FiltersState = {
  category: "",
  price: " ",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<FiltersState>) => {
      state.category = action.payload.category;
      state.price = action.payload.price;
    },
  },
});
export const { setFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
