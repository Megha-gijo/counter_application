import { configureStore } from "@reduxjs/toolkit";
import  slice  from "./slice";


export const store = configureStore({
    reducer:{
        // counter is the name of the reducer to update state
        counter: slice
    }


})

