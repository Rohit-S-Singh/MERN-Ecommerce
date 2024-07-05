import { configureStore, createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    email: '',
    password: ''
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    }
  }
});

const store = configureStore({
  reducer: {
    form: formSlice.reducer
  }
});

export const { setEmail, setPassword } = formSlice.actions;
export default store;
