import { createSlice } from "@reduxjs/toolkit";


// createslice()- returns automatically reducer as well as action
export const slice = createSlice({
   name:'counterApp',
   initialState:{
    value:0
   },
//    actions
   reducers:{
    increment : (state)=>{
        state.value+=1

    },
    decrement :(state)=>{
        state.value-=1
    },
    reset :(state)=>{
        state.value=0
    },
    changeRange :(state,action)=>{
        state.value+=action.payload

    }

   }


})

// actions are need to component
export const {increment,decrement,reset,changeRange} = slice.actions

//reducer are need to store the update state
export default slice.reducer

