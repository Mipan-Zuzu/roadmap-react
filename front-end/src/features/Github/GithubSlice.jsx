import { createAsyncThunk, createSlice,  createEntityAdapter} from "@reduxjs/toolkit";
import axios from "axios"

export const getUser = createAsyncThunk("/user/data", async () => {
    const res = await axios.get("http://localhost:3000/auth/callback")
    return res.data
})

export const getDataUser = createAsyncThunk("/data/user", async () => {
        const res = await axios.get(`http://localhost:3000/data/user`, {
        withCredentials : true
    })
    console.log("api get")
    return res.data
})

const entryUser = createEntityAdapter({
    selectId: (user) =>  user.id
})

export const userSlice = createSlice({
    name : "user",
    initialState : entryUser.getInitialState({
        status : "idle",
        error : null
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUser.fulfilled, (state, action) => {
            entryUser.setAll(state, action.payload)
        }),
        builder.addCase(getDataUser.fulfilled, (state, action) => {
            state.status = "succses"
            state.error = null
            entryUser.setAll(state, action.payload)
        }),
        builder.addCase(getDataUser.rejected, (state, action) => {
            entryUser.removeAll(state)
            state.status = "failed"
            state.error = true
            state.error = action.error.message
        }),
        builder.addCase(getDataUser.pending, (state, action) => {
            state.status = "pending"
            state.error = null
        })
    }
})

export const {selectAll : selecAllUser} = entryUser.getSelectors((state) => state.user)
export default userSlice.reducer