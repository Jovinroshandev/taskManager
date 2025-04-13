import { useState } from "react"
import loginBanner from "../assets/image/login-banner.png"
import {useNavigate, Link } from "react-router-dom"

export default function Login(props){
    const [tempname,setTempname] = useState("")
    const [temppass,setTemppass] = useState("")
    const [flag,setFlag] = useState(false)
    const navigate = useNavigate()
    const data = props.data
    const handleUserName = (evt)=>{
        setTempname(evt.target.value)
    }
    const handleUserPassword = (evt)=>{
        setTemppass(evt.target.value)
    }

    const checkData = ()=>{
        console.log('enter')
        let tempVal = false
        data.forEach((item)=>{
            console.log(item.uname)
            console.log(tempname)
            if(item.uname === tempname && item.upassword === temppass){
                tempVal = true
            }
        })
        if (tempVal){
            console.log("login successfully")
            setFlag(false)
            navigate("/dashboard" ,{state:{user:tempname}})
        }
        else{
            console.log("login Failed")
            setFlag(true)
        }
    }
    return(
        <div className="bg-gradient-to-br from-pink-700 to-purple-500 flex flex-col justify-center items-center h-screen" style={{fontFamily:'"Poppins", sans-serif',boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}}>
            <div className="bg-white rounded-xl flex gap-5">
                <img className="w-96 rounded-tl-xl  rounded-bl-xl" src={loginBanner} alt="" />
                <div className="flex flex-col gap-3 mx-10 justify-center">
                    <h1 className="font-bold text-pink-600 text-2xl text-center" >Login</h1>
                    {flag?<p className="text-red-500 font-medium text-xs bg-red-100 p-1">Please Signup Befor you Login!</p>:""}
                    <div className="flex flex-col gap-5">
                        <label className="font-medium flex flex-col text-sm">
                            Name
                            <input onChange={handleUserName} placeholder="Enter Your Name" className="p-2 rounded-xl mt-1 border border-black bg-gray-200" type="text" />
                        </label>
                        <label className="font-medium flex flex-col text-sm">
                            Password
                            <input onChange={handleUserPassword} placeholder="Enter Your Password"  className="p-2 rounded-xl mt-1 border border-black bg-gray-200 " type="text" />
                        </label>
                        <button onClick={checkData} className="bg-gradient-to-tl from-[#FE8A75] to-[#f30de4] font-bold mt-2 rounded-xl py-1 text-white">Login</button>
                        <p>Don't have an account? <Link className="font-medium underline" to='/signup'>Signup</Link></p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}