import { useDispatch } from "react-redux"
import { increment, decrement } from "../features/Counter/CounterSlice"


const Counter = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(increment())}>tambah</button>
            <button onClick={() => dispatch(decrement())}>kurang</button>
        </div>
    )
}

export default Counter