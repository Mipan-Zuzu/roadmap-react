import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {selecAllUser, getDataUser} from "../features/Github/GithubSlice"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user_data = useSelector(selecAllUser)
    const user = user_data

    useEffect(() => {
        dispatch(getDataUser())
    }, [dispatch])

    console.log(user)
    return (
        <div>
            {
                !user ? navigate("/auth/login") : user.map((item, index) => {
                    return <div key={index} className="min-h-screen justify-center items-center">
                        <h1 className="text-2xl">Hai {item.login}</h1>
                        <img src={item.avatar_url} width={80} alt="" className="rounded-full"/>
                    </div>
                })
            }
        </div>
    )
}

export default Dashboard