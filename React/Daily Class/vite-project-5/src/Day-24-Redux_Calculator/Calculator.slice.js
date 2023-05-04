import { createSlice } from "@reduxjs/toolkit";
const calculatorSlice = createSlice({
    name:"calculator",
    initialState:{
        value:0,
    },
    reducers:{
        addAction:(state,actions)=>{   //in the cal layout we have called the function in dispatch and passed two parameters, we are receiving the paraters thats why state, actions
            console.log({state,actions});
            state.value=+actions.payload.num1 + +actions.payload.num2; // additinal plus sign is added as e.target gives value is string form so we are typecasting it. Payload is like a package we receive with all are ordered the items

        },

        SubAction:(state,actions)=>{
            console.log({state,actions});
            state.value=+actions.payload.num1 - +actions.payload.num2; // front plus otherwise the sign will change

        },

        MulAction:(state,actions)=>{
            console.log({state,actions});
            state.value=+actions.payload.num1 * +actions.payload.num2;
        },

        DivAction:(state,actions)=>{
            console.log({state,actions});
            state.value = +actions.payload.num1 / +actions.payload.num2;
        },

        ClearAction:(state,actions)=>{
            console.log({state,actions});
            state.value = +actions.payload.num1 * +actions.payload.num2 * 0;

        },
    },
});

export const {addAction,SubAction,MulAction,DivAction,ClearAction} = calculatorSlice.actions; // We hav to pass calculatorslice in store js. in calculator slice two compents are there reducers & actions. In the action part we have other components are there so we are passing it as one. and reducers seperately. Earlier versions we are passing the components differently
export default calculatorSlice.reducer;