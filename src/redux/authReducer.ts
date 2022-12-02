import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      if (action.payload) {
        state.authToken = action.payload;
      }
    },
  },
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;
