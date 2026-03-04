import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/Github/GithubSlice"

export const store = configureStore({
    reducer : {
        user : userReducer
    }
})