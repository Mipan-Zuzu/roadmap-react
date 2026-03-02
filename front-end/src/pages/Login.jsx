import Input from "../ui/Input"
import { FaGithub,FaApple } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import Button from "../ui/Button"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
    const [error, setError] = useState("")
    const {id} = useParams()

    useEffect(() => {
        if(id) {
            
        }
    }, [id])

    const handleOuth = () => {
        const url = "http://localhost:3000/auth/github"
        window.location.href = url
    }

    return (
       <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="mb-10 text-4xl font-light flex gap-3"><FaMeta className="text-blue-500 mt-1" /><span className="font-bold">Meta</span> Project</h1>
       <div className="border-2 p-16 px-30 border-b-8 ">
         <div className="-mt-5">
            <label htmlFor="">
                <h1 className="mb-5">Email</h1>
                <Input className="border-gray-200 border shadow-sm p-2 focus:outline w-60 outline-gray-400"/>
                <p className="font-light text-[14px] mb-5">use <span className="font-medium text-gray-600">meta</span> or <span className="font-medium text-gray-600">apple developer</span> account</p>
            </label>
        </div>
        <div>
            <label htmlFor="">
                <h1 className="mb-5">Password</h1>
                  <Input className="border-gray-200 border shadow-sm p-2 w-60 focus:outline outline-gray-400"/>
            </label>
            <p className="mt-3 font-light text-sm">by continue you agree with <span className="font-medium">term, privacy <br /> policy,</span> and <span className="font-medium">cookie policy</span></p>
            <p className="mt-2 mb-2 font-light text-sm text-red-500">{error}</p>
            <div className="flex justify-center mt-3">
                <Button className="p-2 w-60 text-white font-medium bg-blue-400 hover:bg-blue-500 duration-300 hover:cursor-pointer">Login</Button>
            </div>
        </div>
        <Button type={"button"} onClick={() => handleOuth()} className="p-2 w-60 flex gap-5 mb-10 mt-3 border shadow-xl hover:scale-105 duration-300 hover:cursor-pointer">
            <FaGithub size={20} /> <span>Continue with github</span>
        </Button>
        <div className="-mb-10 flex gap-3">
            <p>for developer meta</p> <FaMeta className="mt-1.5"/>
            <IoIosClose className="mt-1" size={20}/>
            <FaApple className="mt-1" />
        </div>
       </div>
       </div>     
    )
}

export default Login