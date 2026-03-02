import Button from "../ui/Button"
import { FcGlobe } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate()
    const handleStart = () => {
        navigate("/auth/login")
    }
    return (
        <div className="flex flex-col justify-center min-h-screen items-center">
            <h1 className="text-4xl">Welcome Meta Developer</h1>
            <p className="mb-5 font-light">Meet our developer in global scale</p>
            <Button onClick={() => handleStart()} className="p-2 w-30 bg-blue-400 text-white hover:bg-blue-500 duration-300 hover:cursor-pointer">Start</Button>
        </div>
    )
}

export default LandingPage