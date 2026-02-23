import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk("/product/getProduct", async () => {
    const res = await axios.get("http://localhost:3000/data")
    return res.data
})

export const updateProduct = createAsyncThunk("/product/updateProduct", async (id,barang,cost,price) => {
    const res = await axios.post(`http://localhost:3000/data/${id}`, {
        barang,
        cost,
        price
    })
    return res.data
})

const productEntry = createEntityAdapter({
    selectId: (product) =>  product.id
})

const productSlice = createSlice({
    name : "product",
    initialState: productEntry.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProduct.fulfilled, (state, action) => {
            productEntry.setAll(state, action.payload.data)
        }),
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            productEntry.setAll(state, action.payload)
        })
    }
})

export const productSelector = productEntry.getSelectors((state) => state.product)
export default productSlice.reducer