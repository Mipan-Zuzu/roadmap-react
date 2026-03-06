import { useEffect } from "react"
import { selecAllUser, getDataUser } from "../features/Github/GithubSlice"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"

const Protect = ({children}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user_data = useSelector(selecAllUser)
    const {status, error} = useSelector((state) => state.user)
    useEffect(() => {
        dispatch(getDataUser())
    }, [dispatch])
    console.log(user_data)

    useEffect(() => {
        if(status === "failed" && error) {
            navigate("/")
    }
    }, [navigate, error, status])

    return children
}

export default Protect