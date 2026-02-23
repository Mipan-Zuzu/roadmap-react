import {useDispatch, useSelector} from "react-redux"
import {productSelector, getProduct} from "../features/Product/ProductSlice"
import { useEffect} from "react"
import { useParams } from "react-router-dom"
const ShowPages = () => {
    const dispatch = useDispatch()
    const productData = useSelector(productSelector.selectAll)
    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])
    const {id} = useParams()
    const stringId = String(id)
    const findItem = productData.find(item => item.id === stringId)
    console.log(findItem)
    return (
        <div>
            {findItem? <ul  className="mb-5">
                    <li> <b>barang</b> : {findItem.barang}</li>
                    <li><b>cost</b> : {findItem.cost}</li>
                    <li><b>price</b> : Rp.{findItem.price}</li>
                </ul>: productData.map((item, index) => (
                <ul key={index} className="mb-5">
                    <li> <b>barang</b> : {item.barang}</li>
                    <li><b>cost</b> : {item.cost}</li>
                    <li><b>price</b> : Rp.{item.price}</li>
                </ul>
            ))}
        </div>
    )
}

export default ShowPages