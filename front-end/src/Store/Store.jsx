import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/Counter/CounterSlice";

 const store = configureStore({
    reducer: {
        counter : CounterReducer
    }
})

export default store