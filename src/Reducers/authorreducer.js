import { createSlice } from "@reduxjs/toolkit";

const authorslice = createSlice({
  name: "Authordata",
  initialState: {
    data: {
      authorinfo: ""
    }
  },
  reducers: {
    updateauthorinfo: (state, action) => {
      state.data.authorinfo = action.payload;
    }
  },
});

export default authorslice.reducer;
export const { updateauthorinfo } = authorslice.actions;
