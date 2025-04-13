import loginBanner from "../assets/image/login-banner.png"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Signup(props){
    const data = props.data
    const setData = props.setData
    const [enterName,setName] = useState("")
    const [enterPass,setPass] = useState("")
    const [enterConPass,setConPass] = useState("")
    const [errormsg,setMess] = useState(false)
    const navigation = useNavigate()
    function handleName(evt){
        setName(evt.target.value)
    }
    function handlePass(evt){
        setPass(evt.target.value)
    }
    function handleConfirm(evt){
        setConPass(evt.target.value)
    }
    function handleUpdateUser(){
        if (enterPass === enterConPass){
            setData([...data,{id:data.length+1,uname:enterName,upassword:enterPass}])
            navigation('/')
        }
        else{
            setMess(true)
        }
    }
    return(
        <div className="bg-gradient-to-br from-pink-700 to-purple-500 flex flex-col justify-center items-center h-screen" style={{fontFamily:'"Poppins", sans-serif',boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}}>
            <div className="bg-white rounded-xl flex gap-5">
                <img className="w-96 rounded-tl-xl  rounded-bl-xl" src={loginBanner} alt="" />
                <div className="flex flex-col gap-3 mx-10 justify-center">
                    <h1 className="font-bold text-blue-600 text-2xl text-center">SignUp</h1>
                    <div className="flex flex-col gap-2">
                        <p className="text-red-500 font-medium text-xs bg-red-100 p-1" style={{display:errormsg?"block":"none"}}>Password Not Matched. Please Try Again!</p>
                        <label className="font-medium flex flex-col text-sm">
                            Name
                            <input onChange={handleName} placeholder="Enter Your Name" className="p-2 rounded-xl mt-1 border border-black bg-gray-200" type="text" />
                        </label>
                        <label className="font-medium flex flex-col text-sm">
                            Password
                            <input onChange={handlePass} placeholder="Enter Your Password"  className="p-2 rounded-xl mt-1 border border-black bg-gray-200 " type="text" />
                        </label>
                        <label className="font-medium flex flex-col text-sm">
                            Confirm Password
                            <input onChange={handleConfirm} placeholder="Re-enter Your Password"  className="p-2 rounded-xl mt-1 border border-black bg-gray-200 " type="text" />
                        </label>
                        <button onClick={handleUpdateUser} className="bg-gradient-to-tl from-[#0dcbff] to-[#0409ff] font-bold mt-2 rounded-xl py-1 text-white">Signin</button>
                        <p>Don't have an account? <Link className="font-medium underline" to='/'>Login</Link></p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}