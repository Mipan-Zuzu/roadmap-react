import { createAsyncThunk, createSlice,  createEntityAdapter} from "@reduxjs/toolkit";
import axios from "axios"

export const getUser = createAsyncThunk("/user/data", async () => {
    const res = await axios.get("http://localhost:3000/auth/callback")
    return res.data
})

export const entryUser = createEntityAdapter({
    selectId : (user) => user.id
})

export const userSlice = createSlice({
    name : "user",
    initialState : entryUser.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUser.fulfilled, (state, action) => {
            entryUser.setAll(state, action.payload.data)
        })
    }
})

export const userSelector = entryUser.getSelectors((state) => state.user)
export default userSlice