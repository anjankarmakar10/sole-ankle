import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FiltersState {
  catagory: string;
}
const initialState: FiltersState = {
  catagory: "all shoes",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<FiltersState>) => {
      state.catagory = action.payload.catagory;
    },
  },
});
export const { setFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
