import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import {selecAllUser, getDataUser} from "../features/Github/GithubSlice"
import { useNavigate, Navigate } from "react-router-dom"

const Dashboard = () => {
    const dispatch = useDispatch()
    const user_data = useSelector(selecAllUser)
    const {status, error} = useSelector((state) => state.user)
    useEffect(() => {
        dispatch(getDataUser())
    }, [dispatch])

    console.log(status, error)

    if(user_data === "failed") {
        console.log("error")
    }

    console.log(user_data, "dsdasd")
    return (
        <div>
            <p className={`${status === "pending" ? 'block' : 'hidden'}`}>Loading....</p>
            {
                !user_data ? (<Navigate to={"/auth/login"}/>) : user_data.map((item, index) => {
                    return <div key={index} className={`min-h-screen justify-center items-center ${status === "pending" ? 'hidden' : 'block'}`}>
                        <h1 className="text-2xl">Hai {item.login}</h1>
                        <img src={item.avatar_url} width={80} alt="" className="rounded-full"/>
                    </div>
                })
            }
        </div>
    )
}

export default Dashboard