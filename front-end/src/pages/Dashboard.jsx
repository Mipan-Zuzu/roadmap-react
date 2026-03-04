import { useEffect } from "react"
import { getDataUser, userSelector } from "../features/Github/GithubSlice"
import { useDispatch, useSelector} from "react-redux"

const Dashboard = () => {
    const dispatch = useDispatch()
    const user_data = useSelector(userSelector.selectAll)
    console.log(user_data)
    useEffect(() => {
        dispatch(getDataUser())
    }, [dispatch])

    return (
        <div>
            <h1>hai {}</h1>
        </div>
    )
}

export default Dashboard