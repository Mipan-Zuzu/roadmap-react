import axios from "axios"
import { useEffect } from "react"

const Test =  () => {
    const handleAxios = async () => {
         const res = await axios.get("http://localhost:3000/data/user", {
            withCredentials : true 
         })
         return console.log(res)
    }
    useEffect(() => {
        handleAxios()
    }, [])
    return (
        <div>
            <h1>dsdasd</h1>
        </div>
    )
}

export default Test