import Input from "../ui/Input"
import Button from "../ui/Button"
import {useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getProduct, productSelector, updateProduct} from "../features/Product/ProductSlice"
import { useEffect, useMemo, useState} from "react"

const UpdatePages = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const productData = useSelector(productSelector.selectAll)
    const findProduct = useMemo(() => {
        return productData.find(item => item.id === params.id)
    }, [params.id, productData])
    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])
    const { id} = findProduct || {}
    const [datas, setDatas] = useState({
        id : "",
        barang : "",
        cost : 0,
        price : 0
    })

    useEffect(() => {
        if(findProduct) {
            setDatas({
                id : findProduct.id,
                barang : findProduct.barang,
                cost : findProduct.cost,
                price : findProduct.price
            })
        }
    }, [findProduct])

    const handleInput = (e) => {
        const {name, value} = e.target
        setDatas(prev => ({
            ...prev,
            [name] : value
        }))
    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(datas)
        dispatch(updateProduct(datas))
    }
    return (
        <div>
            <h1>helloworld</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="barang">
                    <h1>barang</h1>
                    <Input placeholder="update barang" name="barang" value={datas.barang} onChange={e => handleInput(e)} />
                </label>
                <label htmlFor="cost">
                    <h1>cost</h1>
                    <Input placeholder="update cost" name="cost" value={datas.cost} onChange={e => handleInput(e)} />
                </label>
                <label htmlFor="price">
                    <h1>price</h1>
                    <Input placeholder="update price" name="price" value={datas.price} onChange={e => handleInput(e)} />
                </label>
                <Button type="submit">kirim</Button>
            </form>
        </div>
    )
}

export default UpdatePages