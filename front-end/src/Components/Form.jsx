import { useState } from "react"

const Form = () => {
    const [barang, setBarang] = useState("")
    const [cost, setCost] = useState(0)
    const [price, setPrice] = useState(0)

    const [combine, setCombine] = useState({
        "barang" : barang,
        "const" : cost,
        "price" : price
    })


    return (
        <>
            <div>
                <label htmlFor="barang">
                    <h1>Barang</h1>
                    <input 
                    type="text"
                    placeholder="masukan nama Barang"
                    onChange={(e) }
                    />
                </label>
                <label htmlFor="cost">
                    <h1>cost</h1>
                    <input 
                    type="number"
                    placeholder="masukan jumlah barang"
                    onChange={}
                    />
                </label>
                <label htmlFor="price">
                    <h1>price</h1>
                    <input 
                    type="number"
                    placeholder="masukan harga"
                    onChange={}
                    />
                </label>
            </div>
        </>
    )
}

export default Form