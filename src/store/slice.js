import { createSlice } from "@reduxjs/toolkit";

const user = {
  data: null,
  isLoading: false,
  errors: ''
}

export const usersSlice = createSlice({
  name: 'users',
  initialState: user,
  reducers: {
    getUserAction: (state, payload) => {
      console.log({ payload })
      state.isLoading = true;
      state.errors = '';
    },
    getUserSuccessAction: (state, { payload: user }) => {
      state.isLoading = false;
      state.data = user;
    },
    getUserErrorAction: (state, { payload: error }) => {
      state.isLoading = false;
      state.errors = error;
    }
  }
})

const {
  getUserAction,
  getUserSuccessAction,
  getUserErrorAction
} = usersSlice.actions;

export {
  getUserAction,
  getUserSuccessAction,
  getUserErrorAction
}

export default usersSlice.reducer
