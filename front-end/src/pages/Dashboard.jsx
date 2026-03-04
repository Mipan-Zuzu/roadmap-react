import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {selecAllUser, getDataUser} from "../features/Github/GithubSlice"

const Dashboard = () => {
    const dispatch = useDispatch()
    const user_data = useSelector(selecAllUser)
    const user = user_data[0]
    useEffect(() => {
        dispatch(getDataUser())
    }, [dispatch])
    console.log(user)
    return (
        <div>
            <h1>hai</h1>
        </div>
    )
}

export default Dashboard