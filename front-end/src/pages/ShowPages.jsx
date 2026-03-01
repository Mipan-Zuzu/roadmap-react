import {useDispatch, useSelector} from "react-redux"
import {productSelector, getProduct, deleteProduct} from "../features/Product/ProductSlice"
import { useEffect} from "react"
import { Navigate, useParams } from "react-router-dom"
import Button from "../ui/Button"
import { useNavigate } from "react-router-dom"

const ShowPages = () => {
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const productData = useSelector(productSelector.selectAll)
    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])
    const {id} = useParams()
    const stringId = String(id)
    const findItem = productData.find(item => item.id === stringId)

    const handleUpdate = (data) => {
        navigation(`/data/product/${data}`)
    }

    return (
        <div>
            {findItem? <ul  className="mb-5">
                    <li> <b>barang</b> : {findItem.barang}</li>
                    <li><b>cost</b> : {findItem.cost}</li>
                    <li><b>price</b> : Rp.{findItem.price}</li>
                    <ButtonDelete data={findItem.id} dispatch={dispatch}/>
                    <Button className="bg-blue-300 text-black p-2 rounded-md" onClick={() => handleUpdate(findItem.id)}>Update</Button>
                </ul>: productData.map((item, index) => (
                <ul key={index} className="mb-5">
                    <li> <b>barang</b> : {item.barang}</li>
                    <li><b>cost</b> : {item.cost}</li>
                    <li><b>price</b> : Rp.{item.price}</li>
                    <ButtonDelete data={item.id} dispatch={dispatch}/>
                    <Button className="bg-blue-300 text-black p-2 rounded-md" onClick={() => handleUpdate(item.id)}>Update</Button>
                </ul>
            ))}
        </div>
    )
}

export const ButtonDelete = ({data, dispatch}) => {
    const handleDelete = () => {
        const id = data
        dispatch(deleteProduct(id))
    }
    return <Button className="text-white/45 p-2 bg-red-500 rounded-md font-mono" onClick={handleDelete}>delete</Button>
}

export default ShowPages