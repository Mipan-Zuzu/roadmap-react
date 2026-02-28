import { useState} from "react"
import React from "react"
import Input from "../ui/Input"
import { useDispatch } from "react-redux"
import { addProduct } from "../features/Product/ProductSlice"

const AddPages = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        id: "",
        barang: "",
        cost: 0,
        price: 0
    })

    const handlePayload = (e) => {
        const {name, value} = e.target 
        setData(prev => ({
            ...prev,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addProduct({data}))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="id">
                    <h1>id</h1>
                    <Input name="id" value={data.id} onChange={handlePayload} type={"text"} placeholder={"masukan id"} />
                </label>
             <label htmlFor="barang">
                    <h1>Barang</h1>
                    <Input name="barang" value={data.barang} onChange={handlePayload} type={"text"} placeholder={"masukan barang"} />
                </label>
                <label htmlFor="cost">
                    <h1>cost</h1>
                    <Input name="cost" onChange={handlePayload} value={data.cost} type={"number"} placeholder={"masukan cost"}/>
                </label>
                <label htmlFor="price">
                    <h1>price</h1>
                    <Input name="price" onChange={handlePayload} value={data.price} type={"number"} placeholder={"masukan price"}/>
                </label>
                <button type="submit">Send</button>
        </form>
    )
}

export default AddPages