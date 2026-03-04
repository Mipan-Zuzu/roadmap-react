import { createAsyncThunk, createSlice,  createEntityAdapter} from "@reduxjs/toolkit";
import axios from "axios"

export const getUser = createAsyncThunk("/user/data", async () => {
    const res = await axios.get("http://localhost:3000/auth/callback")
    return res.data
})

export const getDataUser = createAsyncThunk("/data/user", async () => {
    const res = await axios.get(`http://localhost:3000/data/user`)
    return res.data
})

const entryUser = createEntityAdapter({
    selectId: (user) =>  user.id
})

export const userSlice = createSlice({
    name : "user",
    initialState : entryUser.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUser.fulfilled, (state, action) => {
            entryUser.setAll(state, action.payload)
        }),
        builder.addCase(getDataUser.fulfilled, (state, action) => {
            entryUser.setAll(state, action.payload)
        })
    }
})

export const {selectAll : selecAllUser} = entryUser.getSelectors((state) => state.user)
export default userSlice.reducer