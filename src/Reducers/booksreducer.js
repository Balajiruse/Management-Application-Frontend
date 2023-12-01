import { createSlice } from "@reduxjs/toolkit";

const bookslice = createSlice({
  name: "Bookdata",
  initialState: {
    data: {
      info: ""
    }
  },
  reducers: {
    updateinfo: (state, action) => {
      state.data.info = action.payload;
    }
  },
});

export default bookslice.reducer;
export const { updateinfo } = bookslice.actions;