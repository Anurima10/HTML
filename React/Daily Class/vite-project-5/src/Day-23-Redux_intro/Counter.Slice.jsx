import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    value1: 10,
    value2: 5,
    value:0,
  },
  reducers: {
    increment: (state) => {
      state.value = value1+value2;
    },
    decrement: (state) => {
      state.value= value1-value2;
    },
    incrementByAmount: (state, action) => {
        state.value += action.payload
      }
  },
});

export const { increment, decrement,incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;




/* import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer

 */