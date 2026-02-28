import Input from "../ui/Input"
import Button from "../ui/Button"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { productSelector } from "../features/Product/ProductSlice"

const UpdatePages = () => {
    // const {id} = useParams()
    // const productSelectors = useSelector(productSelector.selectAll)
    // console.log(findProduct)
    // const [data, setData] = useState({
    //     id : "",
    //     barang: "",
    //     cost: 0,
    //     price: 0
    // })

    return (
        <div>
            <form action="">
                <label htmlFor="barang">
                    <h1>barang</h1>
                    <Input placeholder="update barang" name="barang" value={data.barang} />
                </label>
                <label htmlFor="cost">
                    <h1>cost</h1>
                    <Input placeholder="update cost" name="cost" value={data.cost} />
                </label>
                 <label htmlFor="price">
                    <h1>price</h1>
                    <Input placeholder="update price" name="price" value={data.price} />
                </label>
                <Button type="submit">kirim</Button>
            </form>
        </div>
    )
}

export default UpdatePages