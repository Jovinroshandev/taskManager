import { useNavigate } from "react-router-dom"

export default function Header(props) {
    const name = props.data.charAt(0).toUpperCase() + props.data.slice(1).toLowerCase()
    const navigate = useNavigate()
    function handleLogout() {
        navigate('/')
    }
    return (
        <div>
            <div className="flex justify-between">
                <h1 className="font-bold text-3xl text-red-500">Hello {name} <i class="fa-solid fa-ranking-star text-black"></i></h1>
                <button onClick={handleLogout} className="bg-[#EF4444]  hover:bg-[#0697B7] text-white font-medium px-2 rounded-lg">Logout <i class="fa-solid fa-right-from-bracket"></i></button>
            </div>
            <p>I help you manage your task</p>
        </div>
    )
}