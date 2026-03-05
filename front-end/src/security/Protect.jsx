import { useEffect } from "react"
import { selecAllUser, getDataUser } from "../features/Github/GithubSlice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Protect = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user_data = useSelector(selecAllUser)
    const user = user_data[0]
    useEffect(() => {
        dispatch(getDataUser)
    }, [dispatch])

    console.log(user)

    // useEffect(() => {
    //     if(user == null) {
    //         navigate("/auth/login")
    //     }
    // }, [navigate, user])
}

export default Protect